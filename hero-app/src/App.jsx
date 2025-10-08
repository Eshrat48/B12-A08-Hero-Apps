// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; // Import the Header component
import './App.css'; 

// --- Dummy Components for Routing ---
const Home = () => (
    <div className="page-content">
        <h1>Welcome to the Home Page!</h1>
        <p>Your header is working!</p>
    </div>
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
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;