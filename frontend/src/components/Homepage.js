import React from "react";
import CompletedActivity from './CompletedActivity';
import WipActivity from './WipActivity';
const HomePage = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <WipActivity></WipActivity>
                <CompletedActivity></CompletedActivity>
            </div>
        </div>
    )
};

export default HomePage;