import React, { useRef} from 'react';

const Mecanique = () => {
    const Mec1Ref = useRef(null);
    const Mec1ContainerRef = useRef(null);
    //const [Mec1ContainerHeight, setMec1ContainerHeight] = useState(0);

    const Mec2Ref = useRef(null);
    const Mec2ContainerRef = useRef(null);
    //const [Mec2ContainerHeight, setMec2ContainerHeight] = useState(0);

    const Mec3Ref = useRef(null);
    const Mec3ContainerRef = useRef(null);
    //const [Mec3ContainerHeight, setMec3ContainerHeight] = useState(0);

    const Mec4Ref = useRef(null);
    const Mec4ContainerRef = useRef(null);
    //const [Mec4ContainerHeight, setMec4ContainerHeight] = useState(0);

   /* const updateMecIframeHeight = () => {
        if (Mec1ContainerRef.current) {
            const height1 = Mec1ContainerRef.current.getBoundingClientRect().height;
            //setMec1ContainerHeight(height1);
        }

        if (Mec2ContainerRef.current) {
            const height2 = Mec2ContainerRef.current.getBoundingClientRect().height;
            //setMec2ContainerHeight(height2);
        }

        if (Mec3ContainerRef.current) {
            const height3 = Mec3ContainerRef.current.getBoundingClientRect().height;
            //setMec3ContainerHeight(height3);
        }

        if (Mec4ContainerRef.current) {
            const height4 = Mec4ContainerRef.current.getBoundingClientRect().height;
            //setMec4ContainerHeight(height4);
        }
    };*/

    /*useEffect(() => {
        updateMecIframeHeight();

        window.addEventListener('resize', updateMecIframeHeight);
        return () => {
            window.removeEventListener('resize', updateMecIframeHeight);
        };
    }, []);*/

    return (
        <div>
            {/* First Iframe */}
            <div
                ref={Mec1ContainerRef}
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
                    ref={Mec1Ref}
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                    }}
                    src="https://www.canva.com/design/DAGTl7lE6-Q/u8chGZ9FVg3LMulyI--wzQ/view?embed"
                    title="Mecanique"
                ></iframe>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '40px',
                        backgroundColor: 'white',
                    }}
                ></div>
            </div>

            {/* Second Iframe */}
            <div
                ref={Mec2ContainerRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.2225%',
                    marginBottom: '0.9em',
                    overflow: 'hidden',
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
                    }}
                    src="https://www.canva.com/design/DAGTmDp5Rc4/vp7n1CxCSx4OFeDJQ7ht7g/view?embed"
                    title="Mecanic_2"
                ></iframe>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '40px',
                        backgroundColor: 'white',
                    }}
                ></div>
            </div>

            {/* Third Iframe */}
            <div
                ref={Mec3ContainerRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.2225%',
                    overflow: 'hidden',
                }}
            >
                <iframe
                    ref={Mec3Ref}
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                    }}
                    src="https://www.canva.com/design/DAGTmJHS1o8/6FZRjKqxyo2nOE3tmbD34g/view?embed"
                    title="Mec_3"
                ></iframe>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '40px',
                        backgroundColor: 'black',
                    }}
                ></div>
            </div>

            {/* Fourth Iframe */}
            <div
                ref={Mec4ContainerRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.2225%',
                    overflow: 'hidden',
                }}
            >
                <iframe
                    ref={Mec4Ref}
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                    }}
                    src="https://www.canva.com/design/DAGTmBzgbsg/kzMbdZePjBQ4eVOhtbqRZg/view?embed"
                    title="Mec_4"
                ></iframe>
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '40px',
                        backgroundColor: 'black',
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Mecanique;
