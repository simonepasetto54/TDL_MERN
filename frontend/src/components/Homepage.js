import { React, useEffect } from "react";
import WipActivity from './WipActivity';
const HomePage = () => {
    useEffect(() => {
        console.log('homepage caricato')
    })
    return (
        <div className="container mt-5">
            <div className="row">
                <WipActivity></WipActivity>
            </div>
        </div>
    )
};

export default HomePage;