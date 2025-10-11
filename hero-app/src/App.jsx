// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Import the Header component
import Footer from './components/Footer'; // Import the Footer component
import HeroSection from './components/HeroSection'; // Import the HeroSection component
import TrendingApps from './components/TrendingApps'; // Import the TrendingApps component
import './App.css'; 

// --- Dummy Components for Routing ---
const Home = () => (
    <> {/* Use a fragment to return multiple elements */}
        <HeroSection /> {/* <-- Your new Hero Section goes here */}
        <TrendingApps />
        {/* Any other content for your home page could follow */}
        <div className="page-content">
            {/* Example of other home page content */}
            <h2>More Home Page Content Below Hero</h2>
            <p>This is where additional information for your home page would go.</p>
        </div>
    </>
);

const Apps = () => (
    <div className="page-content">
        <h1>Applications (Apps)</h1>
        <p>List of all available applications.</p>
    </div>
);

const Installation = () => (
    <div className="page-content">
        <h1>Installation Guide</h1>
        <p>Steps to install the platform.</p>
    </div>
);

const NotFound = () => (
    <div className="page-content">
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
    </div>
);

function App() {
  return (
    <Router>
      <Header /> 
      
      {/* <main> tag wraps the main content area (excluding header/footer) */}
      <main> 
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home now renders HeroSection */}
          <Route path="/apps" element={<Apps />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
      <Footer /> 
    </Router>
  );
}

export default App;