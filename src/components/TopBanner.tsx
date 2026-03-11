import './TopBanner.css';

const TopBanner = () => {
    return (
        <a href="#contact" className="top-banner" aria-label="Available for Hire. Click to contact me.">
            <div className="top-banner-content container">
                <span className="availability-dot"></span>
                <span className="top-banner-text">
                    Available for Hire
                </span>
                <span className="top-banner-arrow">→</span>
            </div>
        </a>
    );
};

export default TopBanner;
