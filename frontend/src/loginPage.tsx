import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", { username, password });
  };

  return (
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
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          onClick={handleLogin}
          style={{
            width: "100%",
            padding: "15px",
            fontSize: "16px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "500",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#45a049"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "#4CAF50"}
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
            color: "#4CAF50",
            textDecoration: "none",
            fontWeight: "500",
          }}>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}
