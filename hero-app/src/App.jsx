// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import HeroSection from './components/HeroSection'; 
import TrendingApps from './components/TrendingApps'; 
import AllApps from './components/AllApps'; // <-- IMPORT THE NEW ALL APPS PAGE
import './App.css'; 

// --- Component for the App Details Page (Placeholder) ---
// This component will eventually fetch and display the details for a single app
import { useParams } from 'react-router-dom';

const AppDetails = () => {
    // useParams is used to get the dynamic part of the URL (the app ID)
    const { id } = useParams(); 

    return (
        <div className="page-content" style={{ padding: '100px 20px', textAlign: 'center' }}>
            <h1>App Details Page</h1>
            <p>Loading details for App ID: <span style={{ fontWeight: 'bold', color: '#632EE3' }}>{id}</span></p>
            <p>This page needs to be fully built to fetch data based on this ID.</p>
        </div>
    );
};

// --- Home Component (No Change Needed) ---
const Home = () => (
    <>
        <HeroSection /> 
        <TrendingApps />
    </>
);

// --- Dummy Components (Only Installation and NotFound needed now) ---
const Installation = () => (
    <div className="page-content" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>Installation Guide</h1>
        <p>Steps to install the platform.</p>
    </div>
);

const NotFound = () => (
    <div className="page-content" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
    </div>
);

function App() {
    return (
        <Router>
            <Header /> 
            
            <main> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                    {/* MODIFICATION 1: Use the real AllApps component */}
                    <Route path="/apps" element={<AllApps />} /> 

                    {/* MODIFICATION 2: Add the App Details Route */}
                    <Route path="/app-details/:id" element={<AppDetails />} /> 
                    
                    <Route path="/installation" element={<Installation />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            
            <Footer /> 
        </Router>
    );
}

export default App;