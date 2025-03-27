import './App.css';
import { CalendarIcon, TicketIcon, SearchIcon } from 'lucide-react';

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="overlay container">
          <h1 className="hero-title">Experience Movies Like Never Before</h1>
          <p className="hero-subtitle">
            Find theatres, showtimes, and buy tickets in seconds.
          </p>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search for movies or locations"
              className="search-input"
            />
            <button className="search-button">
              <SearchIcon className="icon" />
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards-section container">
        <div className="card">
          <TicketIcon className="card-icon" />
          <h3 className="card-title">Buy Tickets Online</h3>
          <p>Skip the lines and reserve your seat with just a few clicks.</p>
        </div>
        <div className="card">
          <CalendarIcon className="card-icon" />
          <h3 className="card-title">Upcoming Releases</h3>
          <p>
            Stay ahead of the crowd with early access to blockbuster releases.
          </p>
        </div>
        <div className="card">
          <img src="/images/snacks.png" alt="Snacks" className="card-icon" />
          <h3 className="card-title">Order Snacks Ahead</h3>
          <p>
            Get your favorite movie snacks ready before the movie even starts.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 CineHub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
