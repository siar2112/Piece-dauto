import React, {useEffect, useRef, useState} from 'react';


const Mecanique = () => {

    const Mec1Ref = useRef(null); // Reference to the iframe
    const Mec1ContainerRef = useRef(null); // Reference to the iframe container
    const [Mec1ContainerHeight, setMec1ContainerHeight] = useState(0); // State to store the height



    const Mec2Ref = useRef(null); // Reference to the iframe
    const Mec2ContainerRef = useRef(null); // Reference to the iframe container
    const [Mec2ContainerHeight, setMec2ContainerHeight] = useState(0); // State to store the height


    const updateMecIframeHeight = () => {
        if (Mec1ContainerRef.current) {
            // Correctly define the height1 variable
            const height1 = Mec1ContainerRef.current.getBoundingClientRect().height;
            setMec1ContainerHeight(height1); // Store the height of the first iframe container

            if (Mec2ContainerRef.current) {
                // Correctly define the height2 variable and add it to height1
                const height2 = Mec2ContainerRef.current.getBoundingClientRect().height;
                setMec2ContainerHeight(height1 + height2); // Set the combined height of both containers
            }

        }
    };

    useEffect(() => {
        updateMecIframeHeight(); // Call function on component mount

        // Add event listener to recalculate height on window resize
        window.addEventListener('resize', updateMecIframeHeight);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', updateMecIframeHeight);
        };
    }, []);


    return (
        <div>
            <div
                ref={Mec1ContainerRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.2225%',
                    paddingBottom: 0,
                    overflow: 'hidden',
                    willChange: 'transform',
                }}
            >
                <iframe
                    ref={Mec1Ref}
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0,
                    }}
                    src="https://www.canva.com/design/DAGTl7lE6-Q/u8chGZ9FVg3LMulyI--wzQ/view?embed"
                    title="Mecanique"
                ></iframe>
            </div>
            {/* Progress Bar Cover */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    top: `${Mec1ContainerHeight + 115}px`, // Dynamically calculate the top position
                    width: '100%',
                    height: '30px', // Adjust height as necessary to cover the progress bar
                    backgroundColor: 'white', // You can make this transparent or any color that fits
                    pointerEvents: 'none', // Ensures that the video is still clickable
                }}
            ></div>


            <div
                ref={Mec2ContainerRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.2225%',
                    paddingBottom: 0,
                    marginBottom: '0.9em',
                    overflow: 'hidden',
                    willChange: 'transform',
                }}
            >
                <iframe
                    ref={Mec2Ref}
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0,
                    }}
                    src="https://www.canva.com/design/DAGTmDp5Rc4/vp7n1CxCSx4OFeDJQ7ht7g/view?embed"
                    title="Mecanic_2"
                ></iframe>
            </div>
            {/* Progress Bar Cover */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    top: `${Mec2ContainerHeight + 115}px`, // Dynamically calculate the top position
                    width: '100%',
                    height: '30px', // Adjust height as necessary to cover the progress bar
                    backgroundColor: 'black', // You can make this transparent or any color that fits
                    pointerEvents: 'none', // Ensures that the video is still clickable
                }}
            ></div>


            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.2225%',
                    paddingBottom: 0,
                    overflow: 'hidden',
                    willChange: 'transform',
                }}
            >
                <iframe
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0,
                    }}
                    src="https://www.canva.com/design/DAGTmJHS1o8/6FZRjKqxyo2nOE3tmbD34g/view?embed"
                    title="Mec_3"
                ></iframe>
            </div>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.2225%',
                    overflow: 'hidden',
                    willChange: 'transform',
                }}
            >
                <iframe
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0,
                    }}
                    src="https://www.canva.com/design/DAGTmBzgbsg/kzMbdZePjBQ4eVOhtbqRZg/view?embed"
                    title="Mec_4"
                ></iframe>
            </div>
        </div>
    );
};

export default Mecanique;
