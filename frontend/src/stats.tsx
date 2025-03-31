import { useState } from "react";
import { MapPin, Menu } from "lucide-react";
import MenuPage from "./components/MenuPage";

export default function TempleAttendancePage() {
    const [attendanceStats] = useState({
        totalVisits: 35,
        mostFrequentTemple: "Salt Lake Temple",
        recentOrdinances: [
            { type: "Sealing", temple: "Salt Lake Temple", date: "2025-03-20" },
            { type: "Endowment", temple: "Provo City Center Temple", date: "2025-03-18" },
            { type: "Baptism", temple: "Oquirrh Mountain Temple", date: "2025-03-15" },
            { type: "Sealing", temple: "Tucson Arizona Temple", date: "2025-03-13" },
            { type: "Endowment", temple: "Salt Lake Temple", date: "2025-03-10" },
            { type: "Baptism", temple: "Provo City Center Temple", date: "2025-03-08" },
            { type: "Initiatory", temple: "Las Vegas Nevada Temple", date: "2025-03-05" },
            { type: "Endowment", temple: "Salt Lake Temple", date: "2025-03-01" }
        ]
    });
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="app" style={{ 
            maxWidth: "100vw", 
            width: "100%", 
            margin: "0 auto", 
            backgroundColor: "white", 
            minHeight: "auto", 
            boxSizing: "border-box"
        }}>
            {/* 🔹 Top Banner */}
            <header className="top-banner" style={{
                backgroundColor: "#002E5D", 
                padding: "1rem 2rem",
                width: "100%", 
                boxSizing: "border-box"
            }}>
                <div className="banner-content" style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center", 
                    width: "100%", 
                    maxWidth: "100%",
                    boxSizing: "border-box"
                }}>
                    <h2 className="logo" style={{
                        color: "#ffffff", 
                        fontSize: "5vw", 
                        fontWeight: "600", 
                        margin: "0"
                    }}>Temple Scheduler</h2>
                    <div style={{ 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "1rem" 
                    }}>
                        <a href="/login" className="login-link" style={{
                            color: "#ffffff", 
                            textDecoration: "none"
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
                                  width: "6vw", 
                                  height: "6vw", 
                                  color: "white"
                              }} 
                          />
                        </button>
                    </div>
                </div>
            </header>

            {/* Menu Component - Only Shows When menuOpen is True */}
            {menuOpen && <MenuPage />}
                              <br /><br />
            {/* Temple Attendance Stats Section */}
            <section className="stats-section" style={{
                padding: "1rem 1.5rem", 
                marginTop: "1.5rem", 
                backgroundColor: "#f9f9f9", 
                borderRadius: "10px", 
                flexShrink: 0
            }}>
                <h3 style={{
                    fontSize: "4vw", 
                    fontWeight: "bold", 
                    marginBottom: "1rem", 
                    textAlign: "center"
                }}>Your Temple Attendance Summary</h3>
                <div className="card" style={{
                    padding: "1rem", 
                    textAlign: "center", 
                    backgroundColor: "#fff", 
                    borderRadius: "8px", 
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
                }}>
                    <p style={{
                        fontSize: "4vw", 
                        color: "#555", 
                        marginBottom: "1rem"
                    }}>
                        <strong>Total Visits:</strong> {attendanceStats.totalVisits}
                    </p>
                    <p style={{
                        fontSize: "4vw", 
                        color: "#555", 
                        marginBottom: "1rem"
                    }}>
                        <strong>Most Frequent Temple:</strong> {attendanceStats.mostFrequentTemple}
                    </p>
                </div>
            </section>

            {/* Recent Ordinances Section */}
            <section className="ordinances-section" style={{
                padding: "1rem 1.5rem", 
                marginTop: "1.5rem", 
                flexGrow: 1
            }}>
                <h3 style={{
                    fontSize: "4vw", 
                    fontWeight: "bold", 
                    marginBottom: "1rem", 
                    textAlign: "center"
                }}>Recent Ordinances</h3>
                <div className="ordinance-cards" style={{
                    display: "grid", 
                    gridTemplateColumns: "1fr 1fr", 
                    gap: "1rem"
                }}>
                    {attendanceStats.recentOrdinances.map((ordinance, index) => (
                        <div key={index} className="ordinance-card" style={{
                            backgroundColor: "#fff", 
                            padding: "1rem", 
                            borderRadius: "10px", 
                            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", 
                            textAlign: "center"
                        }}>
                            <h4 style={{
                                fontSize: "4vw", 
                                fontWeight: "bold", 
                                marginBottom: "1rem"
                            }}>{ordinance.type}</h4>
                            <p style={{
                                fontSize: "4vw", 
                                color: "#555"
                            }}>
                                <strong>Temple:</strong> {ordinance.temple}
                            </p>
                            <p style={{
                                fontSize: "4vw", 
                                color: "#555"
                            }}>
                                <strong>Date:</strong> {ordinance.date}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer" style={{
                padding: "1.5rem", 
                textAlign: "center", 
                backgroundColor: "#003366", 
                color: "white", 
                marginTop: "auto"
            }}>
                <a
                    href="https://www.churchofjesuschrist.org/temples/map"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    style={{
                        color: "white", 
                        textDecoration: "none", 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center", 
                        gap: "0.5rem"
                    }}
                >
                    <MapPin className="icon" style={{
                        width: "6vw", 
                        height: "6vw"
                    }} /> 
                    View Temple Map
                </a>
            </footer>
        </div>
    );
}
