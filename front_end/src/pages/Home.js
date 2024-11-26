import React, { useRef, useEffect, useState } from 'react';
import HomePresentation from "../components/HomePresentation";
import ServiceBox from "../components/ServiceBox";
import './StylePages/HomeStyle.css';
import useIntersectionObserver from "../components/useIntersectionObserver";
import LinkButton from "../components/LinkButton";
import Zone from "../components/Zone";
import GoogleReviews from "../components/GoogleReviews";

const Home = () => {
    const ServiceGridRef = useRef(null);
    const isServiceGridVisible = useIntersectionObserver(ServiceGridRef);

    const iframeRef = useRef(null); // Reference to the iframe
    const iframeRef2 = useRef(null); // Reference to the iframe
    const iframeContainerRef = useRef(null); // Reference to the iframe container
    const [iframeContainerHeight, setIframeContainerHeight] = useState(0); // State to store the height
    const iframeContainerRef2 = useRef(null); // Reference to the second iframe container
    const [iframeContainerHeight2, setIframeContainerHeight2] = useState(0); // State to store the second iframe container's height
    const [isMobile] = useState(window.innerWidth < 1000);

    // Function to calculate and update the iframe container's height
    const updateIframeHeight = () => {
        if (iframeContainerRef.current) {
            // Correctly define the height1 variable
            const height1 = iframeContainerRef.current.getBoundingClientRect().height;
            setIframeContainerHeight(height1); // Store the height of the first iframe container

            if (iframeContainerRef2.current) {
                // Correctly define the height2 variable and add it to height1
                const height2 = iframeContainerRef2.current.getBoundingClientRect().height;
                setIframeContainerHeight2(height1 + height2); // Set the combined height of both containers
            }
        }
    };


    useEffect(() => {
        updateIframeHeight(); // Call function on component mount

        // Add event listener to recalculate height on window resize
        window.addEventListener('resize', updateIframeHeight);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', updateIframeHeight);
        };
    }, []);

    return (
        <div>
            <main className="MainContainer"
                  style={{width: "100%", height: "100vh", position: "absolute", zIndex: "0", display: "none"}}>
                <HomePresentation/>
            </main>


            {/* Iframe Container */}
            <div
                className="IframeContainer"
                ref={iframeContainerRef} // Reference to the iframe container
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '0',
                    paddingTop: '56.25%',
                    paddingBottom: '0',
                    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                    marginBottom: '0.9em',
                    overflow: 'hidden',
                    willChange: 'transform',
                }}
            >
                <iframe
                    ref={iframeRef} // Reference to the iframe
                    loading={"eager"}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: '0',
                        left: '0',
                        border: 'none',
                        padding: '0',
                        margin: '0',
                    }}
                    src="https://www.canva.com/design/DAGS2JySRFY/OP2kXPvOZXtZwhAoXxZ64g/view?embed"
                    title="Car animation"
                ></iframe>
            </div>

            {/* Progress Bar Cover */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    top: `${iframeContainerHeight + (isMobile ? 60 : 115)}px`, // Dynamically calculate the top position
                    width: '100%',
                    height: '40px', // Adjust height as necessary to cover the progress bar
                    backgroundColor: 'black', // You can make this transparent or any color that fits
                    pointerEvents: 'none', // Ensures that the video is still clickable
                }}
            ></div>

            <div
                ref={iframeContainerRef2}
                className="ServiceMobileGrid"
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '0',
                    paddingTop: '56.25%',
                    paddingBottom: '0',
                    boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                    marginTop: '1.6em',
                    marginBottom: '0.9em',
                    overflow: 'hidden',
                    borderRadius: '8px',
                    willChange: 'transform',
                }}
            >
                <iframe
                    ref={iframeRef2}
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: '0',
                        left: '0',
                        border: 'none',
                        padding: '0',
                        margin: '0',
                    }}
                    src="https://www.canva.com/design/DAGS2mTS81s/gP-InawDuxjpcg4E8axXWA/view?embed"
                    title="Service mobile Grid"
                ></iframe>
            </div>
            {/* Second Progress Bar Cover */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    top: `${iframeContainerHeight2 + 90}px`, // Dynamically calculate the top position for second iframe
                    width: '100%',
                    height: '65px', // Adjust height as necessary to cover the progress bar
                    backgroundColor: 'white', // You can make this transparent or any color that fits
                    pointerEvents: 'none', // Ensures that the video is still clickable
                }}
            ></div>


            <ul className="ServiceGrid">
                <li ref={ServiceGridRef} className={`ServiceGridItem ${isServiceGridVisible ? 'visible' : ''}`}>
                    <ServiceBox link={'/'} serviceTitre={'Achat de véhicules'}
                                imgSrc={"/handshake-two-businessmen-when-selling-car-386720620-da29f18a-640w.jpg"}></ServiceBox>
                </li>
                <li className={`ServiceGridItem ${isServiceGridVisible ? 'visible' : ''}`}>
                    <ServiceBox link={'/'} serviceTitre={'Mécanique générale'}
                                imgSrc={"/mechanic-working-on-engine-auto-repair-773491846-640w.jpg"}></ServiceBox>
                </li>
                <li className={`ServiceGridItem ${isServiceGridVisible ? 'visible' : ''}`}>
                    <ServiceBox link={'/'} serviceTitre={'Vente de pneus neufs et d’occasion'}
                                imgSrc={"/banner-car-wheel-business-3d-render-1385472002-640w.jpg"}></ServiceBox>
                </li>
                <li className={`ServiceGridItem ${isServiceGridVisible ? 'visible' : ''}`}>
                    <ServiceBox link={'/'} serviceTitre={'Vente de pièces neuves et d\'occasion'}
                                imgSrc={"/new-car-parts-on-gray-background-164081966-640w.jpg"}></ServiceBox>
                </li>
                <li className={`ServiceGridItem ${isServiceGridVisible ? 'visible' : ''}`}>
                    <ServiceBox link={'/'} serviceTitre={'Installation de pneus'}
                                imgSrc={"/fist-mechanics-hand-tool-two-auto-1907782021-640w.jpg"}></ServiceBox>
                </li>
                <li className={`ServiceGridItem ${isServiceGridVisible ? 'visible' : ''}`}>
                    <ServiceBox link={'/'} serviceTitre={'Recyclage de véhicules'}
                                imgSrc={"/recycling-oldused-wrecked-cars-dismantling-parts-1229764255-640w.jpg"}></ServiceBox>
                </li>
            </ul>

            <div style={{marginTop: '5%'}}>
                <LinkButton link='/Mecanique' buttonText="En savoir plus"> </LinkButton>
            </div>

            <div style={{marginTop: '5%'}}>
                <Zone></Zone>
            </div>

            <div style={{marginTop: '5%',paddingBottom:'10%'}}>
                <GoogleReviews></GoogleReviews>
            </div>

        </div>
    );
};

export default Home;
