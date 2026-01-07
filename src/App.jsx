import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MoodMosaic from "./pages/MoodMosaic";

function App() {
    const [showMoodMosaic, setShowMoodMosaic] = useState(false);

    return (
        <div className="app-container">
            <Navbar />
            {!showMoodMosaic ? (
                <Home />
            ) : (
                <div style={{ paddingTop: '100px' }}>
                    <button
                        onClick={() => setShowMoodMosaic(false)}
                        className="btn-secondary"
                        style={{ margin: '2rem', cursor: 'pointer' }}
                    >
                        ← Back to Home
                    </button>
                    <MoodMosaic />
                </div>
            )}

            <div style={{ textAlign: 'center', padding: '4rem 2rem', opacity: 0.5, borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p
                    style={{ cursor: 'pointer', display: 'inline-block' }}
                    onClick={() => setShowMoodMosaic(!showMoodMosaic)}
                >
                    {showMoodMosaic ? "View Full Portfolio" : "Explore Mood Mosaic Prototype"}
                </p>
                <p style={{ marginTop: '1rem', fontSize: '0.8rem' }}>© 2026 Swasthika. All rights reserved.</p>
            </div>
        </div>
    );
}

export default App;
