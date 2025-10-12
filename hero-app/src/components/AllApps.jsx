import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_DATA } from '../data/apps';
import './AllApps.css';

import AppCard from '../components/AppCard'; 

const formatDownloads = (downloads) => {
    if (downloads >= 1000000) {
        return (downloads / 1000000).toFixed(1) + 'M';
    }
    if (downloads >= 1000) {
        return (downloads / 1000).toFixed(1) + 'K';
    }
    return downloads;
};


const AllApps = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // --- Filtering Logic ---
    const filteredApps = useMemo(() => {
        if (!searchTerm) {
            return APP_DATA;
        }
        const lowerCaseSearch = searchTerm.toLowerCase();
        
        return APP_DATA.filter(app => 
            app.title.toLowerCase().includes(lowerCaseSearch)
        );
    }, [searchTerm]);

    const totalAppsCount = APP_DATA.length;

    return (
        <div className="all-apps-container">
            {/* 1. Title Section */}
            <div className="all-apps-header">
                <h1 className="all-apps-title">Our All Applications</h1>
                <p className="all-apps-subtitle">
                    Explore All Apps on the Market developed by us
                </p>
            </div>

            {/* 2. Search and States Section */}
            <div className="search-and-stats-bar">
                <div className="app-count-display">
                    <span className="count-number">{filteredApps.length}</span> 
                    Apps Found
                </div>
                
                <div className="search-bar-wrapper">
                    <input
                        type="text"
                        placeholder="Search apps by title..."
                        className="app-search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="search-icon">🔍</div>
                </div>
            </div>

            {/* 3. App Section (Grid) */}
            <div className="apps-grid-full">
                {filteredApps.length > 0 ? (
                    filteredApps.map(app => (
                        <AppCard 
                            key={app.id} 
                            app={app} 
                            navigate={navigate} 
                            formatDownloads={formatDownloads} 
                        />
                    ))
                ) : (
                    <div className="no-app-found">
                        No App Found matching "{searchTerm}"
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllApps;
