import { useNavigate } from "react-router-dom";

function MenuPage() {
    const navigate = useNavigate();
    return (
        <div className="container" style={{
            position: "absolute",
            top: "0",
            right: "0",
            width: "250px",  // Adjust the width as needed
            backgroundColor: "#ffffff", 
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            zIndex: "1000",  // Ensures it stays above the content
            borderRadius: "8px",
            fontFamily: "'Roboto', sans-serif", // Make sure the font matches the landing page
        }}>
            <h3 style={{
                textAlign: "center", 
                marginBottom: "20px", 
                color: "#333",
                fontWeight: "600",
            }}>
                Menu
            </h3>
            
            {/* Row 1: Schedule Appointment (Full Width) */}
            <div className="row">
                <div className="col-12">
                    <button 
                        onClick={() => navigate("/AppointmentScheduler")}
                        className="btn w-100" 
                        style={{
                            color: "#333", 
                            border: "1px solid #ddd", 
                            borderRadius: "8px", 
                            padding: "15px", 
                            fontSize: "16px", 
                            backgroundColor: "white", 
                            fontWeight: "500",
                            textAlign: "center",
                        }}
                    >
                        Schedule Appointment
                    </button>
                </div>
            </div>

            {/* Row 2: Temples and My Stats (Side-by-Side) */}
            <div className="row mb-3" style={{ marginTop: "20px" }}>
                <div className="col-6">
                    <button 
                        onClick={() => navigate("/map")}
                        className="btn w-100 d-flex align-items-center" 
                        style={{
                            color: "#333", 
                            border: "1px solid #ddd", 
                            borderRadius: "8px", 
                            padding: "15px", 
                            fontSize: "16px", 
                            backgroundColor: "white", 
                            fontWeight: "500",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        Temples
                    </button>
                </div>
                <div className="col-6">
                    <button 
                        onClick={() => navigate("/stats")}
                        className="btn w-100" 
                        style={{
                            color: "#333", 
                            border: "1px solid #ddd", 
                            borderRadius: "8px", 
                            padding: "15px", 
                            fontSize: "16px", 
                            backgroundColor: "white", 
                            fontWeight: "500",
                            textAlign: "center",
                        }}
                    >
                        My Stats
                    </button>
                </div>
            </div>

            {/* Row 3: Upcoming Reservations and Settings (Side-by-Side) */}
            <div className="row mb-3">
                <div className="col-6">
                    <button 
                        onClick={() => navigate("/")}
                        className="btn w-100" 
                        style={{
                            color: "#333", 
                            border: "1px solid #ddd", 
                            borderRadius: "8px", 
                            padding: "15px", 
                            fontSize: "16px", 
                            backgroundColor: "white", 
                            fontWeight: "500",
                            textAlign: "center",
                        }}
                    >
                        Home
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MenuPage;
