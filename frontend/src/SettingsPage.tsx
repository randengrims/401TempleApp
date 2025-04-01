import { useState } from "react";
import { MapPin, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MenuPage from "./components/MenuPage";
export default function SettingsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "auto",
        fontFamily: "'Roboto', sans-serif",
        backgroundColor: "#F4F6F8",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#002E5D",
          padding: "0.75rem 1rem",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "100vw",
            margin: "0 auto",
          }}
        >
          <h2 style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: "600" }}>
            Temple Scheduler
          </h2>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <a
              href="/login"
              style={{
                color: "#FFFFFF",
                textDecoration: "none",
                fontSize: "0.9rem",
              }}
            >
              Login
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
              }}
            >
              <Menu style={{ width: "20px", height: "20px", color: "white" }} />
            </button>
          </div>
        </div>
      </header>
      {/* Floating Menu */}
      {menuOpen && <MenuPage />}
      {/* Main Settings Content */}
      <main
        style={{
          flexGrow: 1,
          width: "100%",
          maxWidth: "800px",
          margin: "2rem auto",
          padding: "1.5rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.75rem",
            fontWeight: "600",
            marginBottom: "2rem",
            textAlign: "center",
            color: "#002E5D",
          }}
        >
          Settings
        </h1>
        {/* Settings Sections */}
        {[
          { title: "Account", items: ["Change email", "Update password", "Delete account"] },
          { title: "Content & Display", items: ["Theme: Light / Dark", "Font size", "Layout preferences"] },
          { title: "Privacy & Social", items: ["Profile visibility", "Connected accounts", "Blocked users"] },
          { title: "Notifications", items: ["Email notifications", "Push alerts", "Reminders"] },
          { title: "About", items: ["App version", "Terms of service", "Privacy policy"] },
        ].map((section, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "10px",
              padding: "1.25rem",
              marginBottom: "1.5rem",
              boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 500,
                marginBottom: "0.75rem",
                color: "#003366",
              }}
            >
              {section.title}
            </h2>
            <ul
              style={{
                paddingLeft: "1.25rem",
                margin: 0,
                listStyle: "disc",
                lineHeight: "1.8",
                color: "#444",
              }}
            >
              {section.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
      {/* Footer */}
      <footer
        style={{
          marginTop: "auto",
          padding: "1rem",
          textAlign: "center",
          backgroundColor: "#003366",
          color: "white",
        }}
      >
        <button
          onClick={() => navigate("/map")}
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
            margin: "0 auto",
            padding: "0.5rem 1rem",
          }}
        >
          <MapPin style={{ width: "20px", height: "20px" }} />
          View Temple Map
        </button>
      </footer>
    </div>
  );
}