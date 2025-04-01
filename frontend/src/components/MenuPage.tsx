import { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
function MenuPage() {
  const navigate = useNavigate();
  return (
    <div style={menuContainerStyle}>
      <h3 style={menuTitleStyle}>Menu</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <button onClick={() => navigate("/")} style={menuButtonStyle}>
          Home
        </button>
        <button onClick={() => navigate("/AppointmentScheduler")} style={menuButtonStyle}>
          Schedule Appointment
        </button>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button onClick={() => navigate("/map")} style={{ ...menuButtonStyle, flex: 1 }}>
            Temples
          </button>
          <button onClick={() => navigate("/stats")} style={{ ...menuButtonStyle, flex: 1 }}>
            My Stats
          </button>
        </div>
        <button onClick={() => navigate("/settings")} style={menuButtonStyle}>
          Settings
        </button>
      </div>
    </div>
  );
}
// :art: Styles with proper TypeScript typing
const menuContainerStyle: CSSProperties = {
  position: "absolute",
  top: "70px",
  right: "20px",
  width: "260px",
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "1.25rem",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
  zIndex: 1000,
  fontFamily: "'Roboto', sans-serif",
};
const menuTitleStyle: CSSProperties = {
  textAlign: "center",
  marginBottom: "1rem",
  color: "#002E5D",
  fontSize: "1.2rem",
  fontWeight: 600,
};
const menuButtonStyle: CSSProperties = {
  backgroundColor: "#F9F9F9",
  border: "1px solid #ddd",
  borderRadius: "8px",
  padding: "0.65rem 0.75rem",
  fontSize: "0.95rem",
  fontWeight: 500,
  color: "#333",
  textAlign: "center",
  cursor: "pointer",
  transition: "background 0.2s ease",
};
export default MenuPage;