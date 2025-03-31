import React, { useState } from 'react';
import { Menu, PlusCircle } from 'lucide-react'; // Importing PlusCircle icon
import MenuPage from './components/MenuPage';

// Define the Appointment interface
export interface Appointment {
  appointmentID: number;
  time: string;
  date: string;
  templeName: string;
  username: string;
}

const AppointmentScheduler = () => {
  const [appointment, setAppointment] = useState<Appointment>({
    appointmentID: 0,
    time: '',
    date: '',
    templeName: '',
    username: 'nelsonbailey', // Set the username by default
  });
  
  const [menuOpen, setMenuOpen] = useState(false);
  const [ordinance, setOrdinance] = useState<string>(''); // State for ordinance dropdown

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  const handleOrdinanceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrdinance(e.target.value);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      date: e.target.value,
    }));
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAppointment((prevAppointment) => ({
      ...prevAppointment,
      time: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(appointment);
    // Handle form submission logic, like sending the data to an API
  };

  return (
    <div
      className="app"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f4f4f4',
        maxWidth: '100vw',
        overflowX: 'hidden'
      }}
    >
      {/* 🔹 Top Banner with Login Link & Hamburger Menu */}
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
            {menuOpen && <MenuPage />}

      {/* Appointment Scheduling Form */}
      <div
        className="container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem',
          maxWidth: '100vw',
          boxSizing: 'border-box',
          flexGrow: 1,
        }}
      >
        {/* Hero Section */}
        <section
          className="hero"
          style={{
            backgroundImage: 'url("/SaltLakeTemple.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '300px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '1rem',
            boxSizing: 'border-box',
          }}
        >
          <div
            className="overlay"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              padding: '1rem',
              borderRadius: '10px',
            }}
          >
            <h1
              className="hero-title"
              style={{ fontSize: '1.5rem', fontWeight: '600', color: '#fff' }}
            >
              Schedule Your Temple Appointment
            </h1>
          </div>
        </section>

        {/* Appointment Form */}
        <section
          className="form-section"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1rem',
            padding: '2rem',
            width: '100%',
            maxWidth: '100vw',
            boxSizing: 'border-box',
          }}
        >
          <form
            onSubmit={(e) => {
                e.preventDefault();
                alert("Appointment Confirmed!");
                window.location.reload();
            }}
            style={{
              backgroundColor: '#ffffff',
              padding: '2rem',
              borderRadius: '10px',
              width: '100%',
              maxWidth: '600px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <label
                htmlFor="ordinance"
                style={{
                  display: 'block',
                  fontSize: '1rem',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                }}
              >
                Ordinance
              </label>
              <select
                id="ordinance"
                name="ordinance"
                value={ordinance}
                onChange={handleOrdinanceChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  border: '1px solid #ddd',
                  backgroundColor: '#f9f9f9',
                  color: 'black'
                }}
              >
                <option value="">Select Ordinance</option>
                <option value="Baptism">Baptism</option>
                <option value="Sealing">Initiatory</option>
                <option value="Endowment">Endowment</option>
                <option value="Sealing">Sealing</option>
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label
                htmlFor="templeName"
                style={{
                  display: 'block',
                  fontSize: '1rem',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                }}
              >
                Temple Name
              </label>
              <input
                type="text"
                id="templeName"
                name="templeName"
                value={appointment.templeName}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  border: '1px solid #ddd',
                  backgroundColor: '#f9f9f9',
                  color: 'black'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label
                htmlFor="username"
                style={{
                  display: 'block',
                  fontSize: '1rem',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                }}
              >
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={appointment.username}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  border: '1px solid #ddd',
                  backgroundColor: '#f9f9f9',
                  display: 'none', // Make the username hidden
                }}
              />
            </div>

            {/* Date input */}
            <div style={{ marginBottom: '1rem' }}>
              <label
                htmlFor="date"
                style={{
                  display: 'block',
                  fontSize: '1rem',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                }}
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={appointment.date}
                onChange={handleDateChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  border: '1px solid #ddd',
                  backgroundColor: '#f9f9f9',
                  color: 'black', // Ensures the text is black
                }}
              />
            </div>

            {/* Time Picker */}
            <div style={{ marginBottom: '1rem' }}>
              <label
                htmlFor="time"
                style={{
                  display: 'block',
                  fontSize: '1rem',
                  marginBottom: '0.5rem',
                  fontWeight: '500',
                }}
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={appointment.time}
                onChange={handleTimeChange}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  border: '1px solid #ddd',
                  backgroundColor: '#f9f9f9',
                  color: 'black'
                }}
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                style={{
                  backgroundColor: '#002E5D',
                  color: 'white',
                  padding: '1rem 2rem',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1.2rem',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: '1rem',
                }}
              >
                <PlusCircle
                  style={{ width: '20px', height: '20px', marginRight: '8px' }}
                />
                Schedule Appointment
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
