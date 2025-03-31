import { useState } from "react";
import { MapPin, Menu } from "lucide-react";
import MenuPage from "./components/MenuPage"; // Ensure this is correctly imported
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="app" style={{ fontFamily: "'Arial', sans-serif", margin: 0 }}>
            {/* 🔹 Top Banner with Login Link & Hamburger Menu */}
            <header className="top-banner" style={{ backgroundColor: "#002E5D", padding: "1rem 2rem" }}>
                <div className="banner-content" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2 className="logo" style={{ color: "#ffffff", fontSize: "24px", fontWeight: "600" }}>Temple Scheduler</h2>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <a href="/login" className="login-link" style={{ color: "#ffffff", textDecoration: "none" }}>Login</a>
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
                                  width: "24px", 
                                  height: "24px", 
                                  color: "white", 
                                  marginLeft: "10px",  // Adjust this value to control how far left it moves
                                  marginRight: "20px"
                              }} 
                          />
                        </button>
                    </div>
                </div>
            </header>

            {/* Menu Component - Only Shows When menuOpen is True */}
            {menuOpen && <MenuPage />}

            {/* Login Form */}
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "#f0f4f8",
                margin: 0,
            }}>
                <div style={{
                    width: "350px",
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "12px",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    alignItems: "center",
                }}>
                    <h2 style={{
                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#333",
                        textAlign: "center",
                        marginBottom: "20px",
                    }}>Login</h2>

                    <input
                        type="text"
                        placeholder="Username"
                        style={{
                            width: "100%",
                            padding: "15px",
                            fontSize: "16px",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                            outline: "none",
                            transition: "border-color 0.3s ease",
                        }}
                    />
                    
                    <input
                        type="password"
                        placeholder="Password"
                        style={{
                            width: "100%",
                            padding: "15px",
                            fontSize: "16px",
                            borderRadius: "8px",
                            border: "1px solid #ddd",
                            outline: "none",
                            transition: "border-color 0.3s ease",
                        }}
                    />

                    <button
                        onClick={() => navigate(-1)} // Replace with actual login handler
                        style={{
                            width: "100%",
                            padding: "15px",
                            fontSize: "16px",
                            backgroundColor: "#002E5D",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontWeight: "500",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#002E5D"}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#002E5D"}
                    >
                        Login
                    </button>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "10px",
                        fontSize: "14px",
                        color: "#555",
                    }}>
                        <span>Don't have an account?</span>
                        <a href="/signup" style={{
                            color: "#002E5D",
                            textDecoration: "none",
                            fontWeight: "500",
                        }}>
                            Sign up
                        </a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer
                  className="footer"
                  style={{
                      backgroundColor: "#002E5D",
                      padding: "1rem 0",
                      textAlign: "center",
                      display: "flex",            // Enable flexbox
                      justifyContent: "center",   // Center horizontally
                      alignItems: "center",       // Center vertically
                  }}
              >
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
                          width: "auto", 
                          padding: "0.5rem 1rem",
                      }}
                  >
                      <MapPin className="icon" style={{ width: "20px", height: "20px" }} /> View Temple Map
                  </button>
              </footer>

        </div>
    );
}
