// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import HeroSection from './components/HeroSection'; 
import TrendingApps from './components/TrendingApps'; 
import AllApps from './components/AllApps'; 
import AppDetails from './components/AppDetails'; // <-- IMPORT THE NEW COMPONENT HERE
import AppNotFound from './components/AppNotFound'; // <-- IMPORT THE NEW COMPONENT HERE
import './App.css'; 

// --- Dummy Components for Routing (Keep these for now) ---
const Home = () => (
    <>
        <HeroSection /> 
        <TrendingApps />
    </>
);

const Installation = () => (
    <div className="page-content">
        <h1>Installation Guide</h1>
        <p>Steps to install the platform.</p>
    </div>
);



function App() {
    return (
        <Router>
            <Header /> 
            
            <main> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/apps" element={<AllApps />} /> 
                    <Route path="/app-details/:id" element={<AppDetails />} /> {/* Uses the imported component */}
                    <Route path="/installation" element={<Installation />} />
                    <Route path="/not-found" element={<AppNotFound />} />
                    <Route path="*" element={<AppNotFound />} />
                </Routes>
            </main>
            
            <Footer /> 
        </Router>
    );
}

export default App;

// NOTE: You can now delete the placeholder AppDetails component that was previously defined 
// inside App.jsx, as you are importing the real one from './pages/AppDetails'.