import { useState } from "react";
import { MapPin, Menu } from "lucide-react";
import MenuPage from "./components/MenuPage";
import personalPhoto from './assets/personalPhoto.jpg';
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
      { type: "Endowment", temple: "Salt Lake Temple", date: "2025-03-01" },
    ],
  });
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div style={{ fontFamily: "sans-serif", color: "#333", backgroundColor: "#F4F6F8", minHeight: "auto" }}>
      {/* Top Banner */}
      <header style={{ backgroundColor: "#002E5D", padding: "1rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ color: "#fff", fontSize: "1.75rem", margin: 0 }}>Temple Scheduler</h1>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <a href="/login" style={{ color: "#fff", textDecoration: "none", fontSize: "1rem" }}>Login</a>
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer" }}>
              <Menu size={28} color="#fff" />
            </button>
          </div>
        </div>
      </header>
      {/* Menu */}
      {menuOpen && <MenuPage />}
      <main style={{ maxWidth: "960px", margin: "2rem auto", padding: "0 1rem" }}>
        {/* Summary Card */}
<section
  style={{
    marginBottom: "2rem",
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
  }}
>
  {/* :bust_in_silhouette: Profile Section */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "1.5rem",
      marginTop: "1rem" // :arrow_down: slightly shift image downward
    }}
  >
<img
  src={personalPhoto}
  alt="Spencer Forstrom"
  style={{
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "center top", // :arrow_left: Focus on upper part of image
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "0.5rem"
  }}
/>
    <p
      style={{
        fontSize: "1.1rem",
        fontWeight: "600",
        margin: 0,
      }}
    >
      Spencer Forstrom
    </p>
  </div>
  {/* :bar_chart: Heading - moved below name */}
  <h2
    style={{
      fontSize: "1.5rem",
      marginBottom: "1.5rem",
      textAlign: "center",
    }}
  >
    Your Temple Attendance Summary
  </h2>
  {/* :chart_with_upwards_trend: Stat Details */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      gap: "1rem",
    }}
  >
    <div>
      <p style={{ fontSize: "1rem", color: "#666" }}>Total Visits</p>
      <p style={{ fontSize: "1.5rem", fontWeight: "600" }}>
        {attendanceStats.totalVisits}
      </p>
    </div>
    <div>
      <p style={{ fontSize: "1rem", color: "#666" }}>
        Most Frequent Temple
      </p>
      <p style={{ fontSize: "1.25rem", fontWeight: "600" }}>
        {attendanceStats.mostFrequentTemple}
      </p>
    </div>
  </div>
</section>
        {/* Recent Ordinances */}
        <section>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", textAlign: "center" }}>Recent Ordinances</h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}>
            {[...attendanceStats.recentOrdinances]
              /*.sort((a, b) => new Date(b.date) - new Date(a.date)) */
              .map((ordinance, index) => (
                <div key={index} style={{
                  backgroundColor: "#fff",
                  padding: "1rem",
                  borderRadius: "8px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                }}>
                  <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{ordinance.type}</h3>
                  <p style={{ fontSize: "0.95rem", margin: "0.25rem 0", color: "#555" }}>
                    <strong>Temple:</strong> {ordinance.temple}
                  </p>
                  <p style={{ fontSize: "0.95rem", margin: "0.25rem 0", color: "#555" }}>
                    <strong>Date:</strong> {ordinance.date}
                  </p>
                </div>
              ))}
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer style={{
        marginTop: "3rem",
        padding: "1.5rem",
        textAlign: "center",
        backgroundColor: "#003366",
        color: "#fff"
      }}>
        <a href="https://www.churchofjesuschrist.org/temples/map"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "1rem"
          }}>
          <MapPin size={20} />
          View Temple Map
        </a>
      </footer>
    </div>
  );
}
