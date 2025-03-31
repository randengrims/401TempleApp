import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage';
import LoginPage from './loginPage';
import TemplesAttendedChart from './stats';
import MapPage from './map';

function App() {
  return (
    <Router>
      {/* MenuPage appears on every page */}
      {/* <TopBanner />  */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/stats" element={<TemplesAttendedChart />} />
        <Route path="/map" element={<MapPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
