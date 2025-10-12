import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { APP_DATA } from '../data/apps'; 
import './AppDetails.css'; 

// --- HELPER FUNCTIONS ---

// Function to format numbers (e.g., 9000000 -> 9.0M, 54000 -> 54.0K)
const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toLocaleString();
};

const calculateRatingPercentage = (count, maxCount) => {
    return maxCount === 0 ? 0 : (count / maxCount) * 100;
};

// Function to dynamically import assets (Crucial for images)
const getImageUrl = (name) => {
    // Assumes assets are in src/assets
    return new URL(`../assets/${name}`, import.meta.url).href;
};

// VITAL: Function to convert double newlines (\n\n) into proper HTML paragraphs <p>
const renderDescription = (text) => {
    if (!text) return null;
    return text.split('\n\n').map((paragraph, index) => {
        if (paragraph.trim() === '') return null;
        return <p key={index} className="description-paragraph">{paragraph}</p>;
    });
};


const AppDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the app data using the ID from the URL
    const app = APP_DATA.find(a => a.id === parseInt(id)); 
    
    if (!app) {
        return (
             <div className="app-details-page not-found">
                <div className="details-container">
                    <h1>App Not Found 😔</h1>
                    <button className="install-button" onClick={() => navigate('/')}>
                        Go Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const maxRatingCount = Math.max(...app.ratings.map(r => r.count));

    // Dynamic Icon Imports (Ensure these files exist in src/assets)
    const iconDownloads = getImageUrl('icon-downloads.png');
    const iconRatings = getImageUrl('icon-ratings.png');
    const iconReviews = getImageUrl('icon-review.png');
    
    // Dynamic App Icon Import
    const appIcon = getImageUrl(app.image); 

    // Helper for rendering rating stars (5 full stars are shown in the screenshot's style)
    const renderStars = (avgRating) => {
        const fullStars = Math.round(avgRating);
        return [...Array(5)].map((_, i) => (
            // A simple way to color the stars based on the rating.
            <span key={i} className="star-icon" style={{ color: i < fullStars ? 'var(--star-color-gold)' : '#e0e0e0' }}>★</span>
        ));
    }


    return (
        <div className="app-details-page">
            <div className="details-container">
                
                {/* --- 1. HEADER SECTION --- */}
                <div className="details-header-section">
                    <div className="icon-wrapper">
                        <img src={appIcon} alt={app.title} className="details-app-icon" />
                    </div>
                    <div className="title-and-info">
                        <h1>{app.title}</h1>
                        <p className="developer-name">Developed by {app.companyName}</p>
                        
                        {/* STATS ROW with ICONS */}
                        <div className="stats-row">
                            <div className="stat-item">
                                <img src={iconDownloads} alt="Downloads" className="stat-icon" />
                                <span className="stat-value">{formatNumber(app.downloads)}</span>
                                <span className="stat-label">Downloads</span>
                            </div>
                            <div className="stat-item">
                                <img src={iconRatings} alt="Average Ratings" className="stat-icon" />
                                <span className="stat-value">{app.ratingAvg.toFixed(1)}</span>
                                <span className="stat-label">Average Ratings</span>
                            </div>
                            <div className="stat-item">
                                <img src={iconReviews} alt="Total Reviews" className="stat-icon" />
                                <span className="stat-value">{formatNumber(app.reviews)}</span>
                                <span className="stat-label">Total Reviews</span>
                            </div>
                        </div>

                        {/* INSTALL BUTTON */}
                        <button className="install-button">
                            Install Now ({app.size} MB)
                        </button>
                    </div>
                </div>

                <hr className="divider" />
                
                {/* --- 2. RATINGS SECTION (Matching the provided screenshot) --- */}
                <div className="ratings-section">
                    <h2>Ratings</h2>
                    <div className="rating-content-wrapper">
                        {/* The screenshot shows only the bar chart with the axis below it, not the large average rating block. 
                            We are reverting to the original bar chart structure for consistency with the final image. */}
                        <div className="ratings-chart-full">
                            {/* Reverse to show 5-star at top, 1-star at bottom */}
                            {[...app.ratings].reverse().map((rating) => ( 
                                <div key={rating.name} className="rating-bar-row">
                                    <span className="rating-stars">{rating.name}</span>
                                    <div className="bar-wrapper">
                                        <div 
                                            className="rating-bar" 
                                            style={{ width: `${calculateRatingPercentage(rating.count, maxRatingCount)}%` }}
                                        ></div>
                                    </div>
                                    <span className="rating-count">{formatNumber(rating.count)}</span>
                                </div>
                            ))}
                        </div>
                        {/* Axis labels matching the screenshot */}
                        <div className="ratings-axis">
                             <span>0</span>
                             <span>3000</span>
                             <span>6000</span>
                             <span>9000</span>
                             <span>12000</span>
                        </div>
                    </div>
                </div>

                <hr className="divider" />

                {/* --- 3. DESCRIPTION SECTION --- */}
                <div className="description-section">
                    <h2>Description</h2>
                    <div className="description-content">
                        {renderDescription(app.description)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;