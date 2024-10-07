import { useState, useEffect } from 'react';

function throttle(func, delay) {
    let lastCall = 0;
    return (...args) => {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

function useIntersectionObserver(ref, options) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const currentRef = ref.current;

        if (!('IntersectionObserver' in window)) {
            // Fallback behavior for older browsers
            setIntersecting(true);
            return;
        }

        const observer = new IntersectionObserver(throttle(([entry]) => {
            setIntersecting(entry.isIntersecting);
        }, 500), options); // Throttle set to 200ms

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            observer.disconnect(); // Cleanup
        };
    }, [ref, options]);

    return isIntersecting;
}

export default useIntersectionObserver;
