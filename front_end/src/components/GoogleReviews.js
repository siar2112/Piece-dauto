import React, { useEffect } from 'react';

const GoogleReviews = () => {

    useEffect(() => {
        // Create script element for Elfsight widget
        const script = document.createElement('script');
        script.src = 'https://static.elfsight.com/platform/platform.js';
        script.setAttribute('data-use-service-core', '');
        script.defer = true;

        // Append the script to the document body
        document.body.appendChild(script);

        // Cleanup the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {/* Elfsight widget container */}
            <div className="elfsight-app-f2a731d8-e5b1-43f2-baec-05c076609718" data-elfsight-app-lazy></div>
        </div>
    );
};

export default GoogleReviews;
