import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Leaflet's built-in CSS
import './Map.css'; // Custom CSS file for styling

const LocationMarker = ({
  location,
}: {
  location: { lat: number; lng: number } | null;
}) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.setView([location.lat, location.lng], 13);
    }
  }, [location, map]);

  return location ? (
    <Marker position={[location.lat, location.lng]}>
      <Popup>Your Location</Popup>
    </Marker>
  ) : null;
};

const MapPage = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<
    Array<{ lat: number; lng: number; name: string }>
  >([]);
  const [loading, setLoading] = useState(false); // For search loading state

  useEffect(() => {
    if (navigator.geolocation) {
      const watcher = navigator.geolocation.watchPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => setError('Location access denied'),
        { enableHighAccuracy: true }
      );
      return () => navigator.geolocation.clearWatch(watcher);
    } else {
      setError('Geolocation is not supported by your browser');
    }
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://your-backend-api.com/api/locations?query=${searchTerm}`
      );
      const data: Array<{ lat: number; lng: number; name: string }> =
        await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error fetching locations:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="map-page">
      <nav>
        <a href="/">Home</a>
        <a href="/map">Map Page</a>
      </nav>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search locations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>

      {loading && <p className="loading-message">Loading search results...</p>}
      {error ? (
        <p className="error-message">{error}</p>
      ) : (
        <div className="map-container">
          <MapContainer
            center={location ? [location.lat, location.lng] : [0, 0]}
            zoom={13}
            className="map-container"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <LocationMarker location={location} />
          </MapContainer>
        </div>
      )}

      <ul className="search-results">
        {searchResults.map((result, index) => (
          <li
            key={index}
            className="search-result-item"
            onClick={() => setLocation({ lat: result.lat, lng: result.lng })}
          >
            {result.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapPage;
