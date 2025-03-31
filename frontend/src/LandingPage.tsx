import { useState, useEffect } from "react";
import { CalendarDays, MapPin, PlusCircle, Menu } from "lucide-react";
import { Appointment } from "./Appointment";
import MenuPage from "./components/MenuPage"; // Ensure this is correctly imported
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function LandingPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [appointments, setAppointments] = useState<Appointment[]>([]); // State for appointments
    const navigate = useNavigate(); // Initialize useNavigate

    // Fetch appointments when component mounts
    useEffect(() => {
        fetch("http://localhost:5178/Temple/GetAppointments")
            .then((response) => response.json())
            .then((data) => setAppointments(data)) // Set appointments state
            .catch((error) => console.error("Error fetching appointments:", error));
    }, []);

    return (
        <div className="app" style={{ 
            display: "flex", 
            flexDirection: "column", 
            minHeight: "100vh", 
            backgroundColor: "#fff", 
            maxWidth: "100vw", 
            overflowX: "hidden" 
        }}>
            
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

            {/* Menu Component - Only Shows When menuOpen is True */}
            {menuOpen && <MenuPage />}

            <div className="container" style={{
                display: "flex", 
                flexDirection: "column", 
                alignItems: "center", 
                padding: "1rem", 
                maxWidth: "100vw", 
                boxSizing: "border-box", 
                flexGrow: 1
            }}>
                {/* Hero Section with Banner Image */}
                <section className="hero" style={{
                    backgroundImage: 'url("/SaltLakeTemple.jpg")', 
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    height: "250px", 
                    width: "100%", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    textAlign: "center", 
                    color: "white", 
                    padding: "0.5rem",
                    boxSizing: "border-box"
                }}>
                    <div className="overlay" style={{
                        backgroundColor: "rgba(0, 0, 0, 0.5)", 
                        padding: "0.5rem", 
                        borderRadius: "10px"
                    }}>
                        <h1 className="hero-title" style={{ fontSize: "1.2rem" }}>Temple Appointment Scheduler</h1>
                        <p className="hero-subtitle" style={{ fontSize: "0.9rem" }}>
                            Helping members of The Church of Jesus Christ of Latter-day Saints schedule sacred ordinances
                        </p>
                    </div>
                </section>

                {/* Appointment Scheduling Cards */}
                <section className="cards-section" style={{
                    display: "grid", 
                    gridTemplateColumns: "1fr 1fr", 
                    gap: "1rem", 
                    padding: "1rem", 
                    width: "100%", 
                    boxSizing: "border-box", 
                    maxWidth: "100vw"
                }}>
                    {["Sealing", "Initiatory", "Endowment", "Baptisms"].map((type) => (
                        <div className="card" key={type} style={{
                            backgroundColor: "#f1f1f1", 
                            padding: "1rem", 
                            borderRadius: "10px", 
                            textAlign: "center"
                        }}>
                            <button className="card-title" style={{
                                border: "none", 
                                background: "none", 
                                fontSize: "1rem", 
                                cursor: "pointer", 
                                display: "flex", 
                                flexDirection: "column", 
                                alignItems: "center"
                            }} onClick={() => navigate("/AppointmentScheduler")}>
                                <PlusCircle className="card-icon" style={{ width: "32px", height: "32px", color: "#003366" }} />
                                Schedule {type}
                            </button>
                        </div>
                    ))}
                </section>

                {/* Upcoming Appointments Section */}
                <section className="cards-section" style={{
                    padding: "1rem", 
                    width: "100%", 
                    boxSizing: "border-box", 
                    maxWidth: "100vw"
                }}>
                    <div className="card" style={{
                        backgroundColor: "#f1f1f1", 
                        padding: "1rem", 
                        borderRadius: "10px", 
                        textAlign: "center"
                    }}>
                        <div className="card-title" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                            <CalendarDays className="card-icon" style={{ width: "24px", height: "24px", color: "#003366" }} />
                            My Upcoming Appointments
                        </div>
                        
                        {/* Display appointments if available */}
                        {appointments.length > 0 ? (
                            <ul style={{ listStyleType: "none", padding: 0 }}>
                                {appointments.map((A) => (
                                    <li key={A.appointmentID} style={{ marginBottom: "1rem", fontSize: "1rem", color: "#555" }}>
                                        <strong>{A.templeName}</strong> - {A.date} at {A.time}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p style={{ fontSize: "1rem", color: "#555" }}>No upcoming appointments. Schedule one above to get started!</p>
                        )}
                    </div>
                </section>
            </div>

            {/* Footer with Temple Map Link */}
            <footer className="footer" style={{
                padding: "1rem", 
                textAlign: "center", 
                backgroundColor: "#003366", 
                color: "white"
            }}>
            <button
                onClick={() => navigate("/map")} // Call navigate function on click
                style={{
                    color: "white", 
                    textDecoration: "none", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    gap: "0.5rem",
                    backgroundColor: "transparent", 
                    border: "none", 
                    cursor: "pointer",
                    width: "auto", // Ensures the button size is based on its content
                    margin: "0 auto", // Centers the button horizontally
                    padding: "0.5rem 1rem", // Adjust padding for better spacing inside the button
                }}
            >
                <MapPin className="icon" style={{ width: "20px", height: "20px" }} /> View Temple Map
            </button>

            </footer>
        </div>
    );
}

