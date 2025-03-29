import React from 'react';
import { CalendarDays, MapPin, PlusCircle } from 'lucide-react';
import './App.css';

function App() {
  return (
    <>
      <div className="app">
        {/* 🔹 Top Banner with Login Link */}
        <header className="top-banner">
          <div className="banner-content">
            <h2 className="logo">Temple Scheduler</h2>
            <a href="/login" className="login-link">
              Login
            </a>
          </div>
        </header>

        <div className="container">
          <section
            className="hero"
            style={{
              backgroundImage:
                'url(https://www.churchofjesuschrist.org/imgs/7e3a0cfb922a11ecbfa3eeeeac1f0bf9dba9c6d8/full/320%2C/0/default)',
            }}
          >
            <div className="overlay">
              <h1 className="hero-title">Temple Appointment Scheduler</h1>
              <p className="hero-subtitle">
                Helping members of The Church of Jesus Christ of Latter-day
                Saints schedule sacred ordinances
              </p>
            </div>
          </section>

          <section className="cards-section">
            <div className="card">
              <button className="card-title">
                <PlusCircle className="card-icon" />
                Schedule Sealing
              </button>
            </div>
            <div className="card">
              <button className="card-title">
                <PlusCircle className="card-icon" />
                Schedule Initiatory
              </button>
            </div>
            <div className="card">
              <button className="card-title">
                <PlusCircle className="card-icon" />
                Schedule Endowment
              </button>
            </div>
            <div className="card">
              <button className="card-title">
                <PlusCircle className="card-icon" />
                Schedule Baptisms
              </button>
            </div>
          </section>

          <section className="cards-section">
            <div className="card">
              <div className="card-title">
                <CalendarDays className="card-icon" />
                My Upcoming Appointments
              </div>
              <p>
                No upcoming appointments. Schedule one above to get started!
              </p>
            </div>
          </section>
        </div>

        <footer className="footer">
          <a
            href="https://www.churchofjesuschrist.org/temples/map"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:underline"
          >
            <MapPin className="icon" /> View Temple Map
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;
