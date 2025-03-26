import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register chart components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default function TemplesAttendedChart() {
  const [totalTemples, setTotalTemples] = useState(null); // State to store the total temples attended
  const [loading, setLoading] = useState(true); // Loading state to show a loading indicator

  // Fetch total temples attended from the backend API
  useEffect(() => {
    const fetchTemplesAttended = async () => {
      try {
        const response = await fetch("/api/stats/temples-attended"); // Replace with your actual API endpoint
        const data = await response.json();
        setTotalTemples(data.total); // Assuming the response has a field called 'total'
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Stop the loading indicator once data is fetched
      }
    };

    fetchTemplesAttended();
  }, []);

  // Chart.js data configuration
  const data = {
    labels: ['Total Temples'], // Label for the x-axis
    datasets: [
      {
        label: 'Temples Attended',
        data: [totalTemples || 0], // Dynamically set the data
        backgroundColor: '#4CAF50', // Bar color
        borderColor: '#388E3C',
        borderWidth: 1,
      },
    ],
  };

  // Chart.js options configuration
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: totalTemples ? totalTemples + 10 : 100, // Dynamic max value based on total temples
      },
    },
    plugins: {
      legend: {
        position: 'top' as const, // 'top' is a valid literal type in Chart.js
      },
      title: {
        display: true,
        text: 'Temples Attended',
      },
    },
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundColor: "#f0f4f8" }}>
      <div style={{ padding: "40px", borderRadius: "12px", backgroundColor: "white", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", width: "500px", textAlign: "center" }}>
        <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#333" }}>Total Temples Attended</h2>
        {loading ? (
          <p style={{ color: "#555", fontSize: "18px" }}>Loading...</p>
        ) : (
          <Bar data={data} options={options} />
        )}
        <button 
          onClick={() => window.location.reload()} 
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
            marginTop: "20px",
          }}
        >
          Refresh Stats
        </button>
      </div>
    </div>
  );
}
