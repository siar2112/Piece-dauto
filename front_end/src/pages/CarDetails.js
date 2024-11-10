import React, { useEffect,useRef } from 'react';
import { useLocation } from 'react-router-dom';


const CarDetails = () => {
    const location = useLocation();
    const { car } = location.state || {}; // Get the car data from location state

    const containerRef = useRef(null);

    useEffect(() => {
        // Initialize Cloudinary gallery widget after component mounts
        if (window && containerRef.current) {
            window.cloudinary.galleryWidget({
                container: containerRef.current,
                cloudName: 'dlmghvrfg',
                mediaAssets: [{ tag: "Car1" }]
            }).render(); // Render the gallery
        }
    }, []);

    if (!car) {
        return <div>No car data available.</div>;
    }

    return (
        <div>

            {/* Cloudinary Gallery */}
            <div ref={containerRef} style={{maxWidth: '1200px', margin: 'auto'}}></div>

            <h1>{car.name}</h1>
            <p>Price: ${car.price}</p>
        </div>
    );
};

export default CarDetails;
