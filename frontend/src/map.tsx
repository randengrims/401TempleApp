import { useState, useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  Polyline,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.css';
import MenuPage from './components/MenuPage';
import { Menu } from 'lucide-react';

const customMarkerIcon = L.icon({
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

type Coordinates = { lat: number; lng: number };
type Temple = {
  templeId: number;
  templeName: string;
  templeAddress: string;
  templeZip: number;
  lat?: number;
  lng?: number;
};

const geocodeAddress = async (address: string): Promise<Coordinates | null> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
    );
    const data = await response.json();
    if (Array.isArray(data) && data.length > 0) {
      return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
    }
  } catch (error) {
    console.error('Geocoding error:', error);
  }
  return null;
};

const LocationMarker = ({ location }: { location: Coordinates | null }) => {
  const map = useMap();
  useEffect(() => {
    if (location) {
      map.setView([location.lat, location.lng], 13);
    }
  }, [location, map]);

  return location ? (
    <Marker position={[location.lat, location.lng]} icon={customMarkerIcon}>
      <Popup>Your Location</Popup>
    </Marker>
  ) : null;
};

const MapPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState<Coordinates | null>(null);
  const [start, setStart] = useState<Coordinates | null>(null);
  const [destination, setDestination] = useState<Coordinates | null>(null);
  const [temples, setTemples] = useState<Temple[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [route, setRoute] = useState<Array<[number, number]> | null>(null);
  const fetchedRef = useRef<boolean>(false);

  // Fetch current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: Coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setStart(coords);
          setLocation(coords);
        },
        (error) => console.error('Error getting current location:', error)
      );
    }
  }, []);

  // Fetch temples from the server
  useEffect(() => {
    if (!fetchedRef.current) {
      fetchedRef.current = true;
      fetch('https://localhost:5000/Temple/AllTemples')
        .then(async (response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          const uniqueTemples = new Map();
          for (const temple of data.temples) {
            const key = `${temple.templeName}-${temple.templeAddress}`;
            if (!uniqueTemples.has(key)) {
              uniqueTemples.set(key, temple);
            }
          }
          setTemples(Array.from(uniqueTemples.values()));
        })
        .catch((error) => setErrorMessage(error.message));
    }
  }, []);

  const filteredResults = searchTerm.trim()
    ? temples.filter((temple) =>
        temple.templeName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  const handleLocationCardClick = async (temple: Temple) => {
    console.log('Geocoding temple address:', temple.templeAddress);
    const preciseCoords = await geocodeAddress(temple.templeAddress);
    if (preciseCoords) {
      setDestination(preciseCoords);
    } else {
      setErrorMessage('Could not fetch accurate coordinates.');

      // Automatically hide the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000); // 2000ms = 2 seconds
    }
  };

  const handleSearchSubmit = async () => {
    const addressCoords = await geocodeAddress(searchTerm);
    if (addressCoords) {
      setDestination(addressCoords);
      setSearchTerm('');
    } else {
      setErrorMessage('Address not found.');

      // Automatically hide the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000); // 2000ms = 2 seconds
    }
  };

  // Fetch route from current location to destination
  const fetchRoute = async (destination: { lat: number; lng: number }) => {
    if (!location || !destination) return;

    console.log('Fetching route from location to destination...');
    try {
      const response = await fetch(
        `https://router.project-osrm.org/route/v1/driving/${location.lng},${location.lat};${destination.lng},${destination.lat}?overview=full&geometries=geojson`
      );
      const data = await response.json();

      if (data.routes.length > 0) {
        const coordinates = data.routes[0].geometry.coordinates.map(
          ([lng, lat]: [number, number]) => [lat, lng]
        );
        setRoute(coordinates);
        console.log('Route found:', coordinates);
      } else {
        setErrorMessage('No route found.');

        // Automatically hide the error message after 3 seconds
        setTimeout(() => {
          setErrorMessage(null);
        }, 2000); // 2000ms = 2 seconds

        console.log('No route found.');
      }
    } catch {
      setErrorMessage('Error fetching route data.');

      // Automatically hide the error message after 3 seconds
      setTimeout(() => {
        setErrorMessage(null);
      }, 2000); // 2000ms = 2 seconds

      console.error('Error fetching route data.');
    }
  };

  useEffect(() => {
    if (start && destination) {
      fetchRoute(destination);
    }
  }, [start, destination]);

  return (
    <div className="map-page">
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <header className="top-banner" style={{
                backgroundColor: "#002E5D", 
                padding: "0.75rem 1rem", 
                width: "100%",
                boxSizing: "border-box"
            }}>
                <div className="banner-content" style={{
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    width: "100%", 
                    maxWidth: "100vw", 
                    margin: "0 auto",
                    boxSizing: "border-box"
                }}>
                    <h2 className="logo" style={{
                        color: "#ffffff", 
                        fontSize: "20px", 
                        fontWeight: "600"
                    }}>Temple Scheduler</h2>
                    <div style={{
                        display: "flex", 
                        alignItems: "center", 
                        gap: "0.5rem"
                    }}>
                        <a href="/login" className="login-link" style={{
                            color: "#ffffff", 
                            textDecoration: "none", 
                            fontSize: "0.9rem"
                        }}>Login</a>
                        <button 
                            onClick={() => setMenuOpen(!menuOpen)}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: "0.5rem"
                            }}
                        >
                            <Menu 
                                style={{
                                    width: "20px", 
                                    height: "20px", 
                                    color: "white", 
                                }} 
                            />
                        </button>
                    </div>
                </div>
            </header>

            {/* Menu Component - Only Shows When menuOpen is True */}
            {menuOpen && <MenuPage />}
            <br /><br /><br />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for an address or Select a temple..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          onClick={() => setShowDropdown(true)}
        />
        <button
          onClick={handleSearchSubmit}
          onFocus={() => setShowDropdown(false)}
        >
          Search
        </button>
        {showDropdown && (
          <ul className="search-results">
            {filteredResults.length > 0 && (
              <div>
                <h4>Temples</h4>
                {filteredResults.map((temple, index) => (
                  <li
                    key={index}
                    className="search-result-item"
                    onClick={() => {
                      setDestination({
                        lat: temple.lat ?? 0,
                        lng: temple.lng ?? 0,
                      });
                      setSearchTerm(temple.templeName); // Update search term to temple name
                      setShowDropdown(false);
                    }}
                  >
                    <div className="location-card">
                      <h3>{temple.templeName}</h3>
                      <p>Address: {temple.templeAddress}</p>
                    </div>
                  </li>
                ))}
              </div>
            )}

            {searchTerm.trim() === '' && temples.length > 0 && (
              <div className="location-list">
                <h4>Preloaded Temples</h4>
                {temples.map((temple, index) => (
                  <div
                    key={index}
                    className="location-card"
                    onClick={() => handleLocationCardClick(temple)}
                  >
                    <h3>{temple.templeName}</h3>
                    <p>Address: {temple.templeAddress}</p>
                  </div>
                ))}
              </div>
            )}
          </ul>
        )}
      </div>
      <div
        className="map-container-wrapper"
        onClick={() => setShowDropdown(false)}
      >
        <MapContainer
          center={[40.2338, -111.6585]}
          zoom={13}
          className="map-container"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker location={location} />
          {destination && (
            <Marker
              position={[destination.lat, destination.lng]}
              icon={customMarkerIcon}
            >
              <Popup>Destination</Popup>
            </Marker>
          )}
          {route && <Polyline positions={route} color="blue" />}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapPage;