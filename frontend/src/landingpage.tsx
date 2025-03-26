import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router for navigation

function LandingPage() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Temple</h1>
      <div style={styles.links}>
        <Link to="/login" style={styles.link}>Login Page</Link>
        <Link to="/map" style={styles.link}>Map Page</Link>
        <Link to="/stats" style={styles.link}>Stats Page</Link>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    textAlign: 'center', // TypeScript expects this value to be one of 'left', 'right', 'center', etc.
    padding: '50px',
    backgroundColor: '#f4f4f9',
  },
  title: {
    color: '#4CAF50',
    fontSize: '3em',
  },
  links: {
    marginTop: '20px',
  },
  link: {
    textDecoration: 'none',
    margin: '15px',
    padding: '15px',
    backgroundColor: '#4CAF50',
    color: 'white',
    borderRadius: '5px',
    fontSize: '1.2em',
  },
};

export default LandingPage;
