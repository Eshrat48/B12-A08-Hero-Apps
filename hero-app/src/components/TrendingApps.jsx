import React from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_DATA } from '../data/apps';
import './TrendingApps.css';
// import { FaDownload, FaStar } from 'react-icons/fa'; // Not needed anymore

// 1. IMPORT THE ICONS DIRECTLY
import downloadIcon from '../assets/icon-downloads.png';
import ratingIcon from '../assets/icon-ratings.png';


const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
        return (downloads / 1000000).toFixed(1) + 'M';
    }
    if (downloads >= 1000) {
        return (downloads / 1000).toFixed(1) + 'K';
    }
    return downloads;
};

const AppCard = ({ app, navigate }) => {
    // 2. USE DYNAMIC IMPORT PATH FOR APP ICONS
    // This assumes your app images (e.g., demo-app (1).webp) are in src/assets
    // We use the new URL() constructor with import.meta.url for runtime resolution.
    // NOTE: If you are not using Vite, this might need adjustment (e.g., require()).
    const appImage = new URL(`../assets/${app.image}`, import.meta.url).href; 

    return (
        <div className="app-card" onClick={() => navigate(`/app-details/${app.id}`)}>
            <div className="app-image-placeholder">
                {/* 3. Render the App Image here */}
                <img src={appImage} alt={app.title} className="app-icon" />
            </div>
            
            <div className="app-content">
                <div className="app-name">{app.title}</div>
                <div className="app-stats">
                    {/* DOWNLOAD STAT - using imported icon module */}
                    <div className="mini-tag downloads">
                        <img src={downloadIcon} alt="Downloads" className="downloads-icon" />
                        {formatDownloads(app.downloads)}
                    </div>
                    {/* RATING STAT - using imported icon module */}
                    <div className="mini-tag rating">
                        <img src={ratingIcon} alt="Rating" className="rating-icon" />
                        {app.ratingAvg.toFixed(1)}
                    </div>
                </div>
            </div>
        </div>
    );
};

const TrendingApps = () => {
    const navigate = useNavigate();
    const trendingApps = APP_DATA.slice(0, 8);

    return (
        <div className="trending-apps-container">
            <h1 className="trending-title">Trending Apps</h1>
            <p className="trending-subtitle">
                Explore All Trending Apps on the Market developed by us
            </p>
            <div className="apps-grid">
                {trendingApps.map(app => (
                    <AppCard key={app.id} app={app} navigate={navigate} />
                ))}
            </div>
            <button
                className="show-all-btn"
                onClick={() => navigate('/apps')}
            >
                Show All
            </button>
        </div>
    );
};

export default TrendingApps;