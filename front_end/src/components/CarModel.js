import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { gsap } from 'gsap';
import useIntersectionObserver from './useIntersectionObserver'; // Ensure the path is correct based on your directory structure

function CarModel() {
    const canvasRef = useRef(null);
    const isVisible = useIntersectionObserver(canvasRef, { rootMargin: '100px' });


    useEffect(() => {
        let isMounted = true;
        if (!isVisible) return;

        const scene = new THREE.Scene();


        // Camera

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 100);
        camera.position.z = 10;
        camera.position.x = -3;
        camera.position.y = 2;


        function moveCamera(x, y, z) {
            gsap.to(camera.position, {
                duration: 4,
                x,
                y,
                z
            });
        }

        function rotateCamera(x, y, z) {
            gsap.to(camera.rotation, {
                duration: 4,
                x,
                y,
                z
            });
        }

        //const mainContainer = document.querySelector('.MainContainer');


        // renderer
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
        renderer.setSize(window.innerWidth, window.innerHeight);


        // Ambient light
        scene.background = new THREE.Color(0x2f2f2f); // Gray background color
        const ambientLight = new THREE.AmbientLight(0x808080, 1);
        scene.add(ambientLight);

        // Add directional light to improve lighting
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(5, 5, 5).normalize();
        scene.add(directionalLight);

        // 3d model of the car
        let CarMesh;

        // Loading the model
        const loader = new GLTFLoader();



        function adjustLogoScale() {
            if (!CarMesh || !canvasRef.current) return;
            const canvasWidth = canvasRef.current.clientWidth;

            if (canvasWidth <= 1000) {
                CarMesh.scale.set(0.5, 0.9, 0.5);
            } else {
                CarMesh.scale.set(1.5, 1.5, 1.5);
            }
        }

        function handleResize() {
            const width = window.innerWidth;
            const height = window.innerHeight/2;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            adjustLogoScale(); // Call this inside the resize event if necessary
        }

        window.addEventListener('resize', handleResize);



        loader.load('scene.gltf', (gltf) => {
            if (!isMounted) return;
            console.log("GLTF model loaded");
            CarMesh = gltf.scene;
            adjustLogoScale();
            CarMesh.position.set(6, -1.5, 1);  // 3,0.5,5
            scene.add(CarMesh);
        }, undefined, (error) => {
            if (!isMounted) return;
            console.error("Error loading GLTF model:", error);
        });



        // Handle window resize
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        });

        rotateCamera(0, -0.5, 0); // 0, -1, 0
        moveCamera(4.0,-1.4,3.5); // 0.5, 1, 3

        function animate(time) {
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            isMounted = false;
            renderer.dispose();
            window.removeEventListener('resize', handleResize);
        };

    }, [isVisible]);


    return <canvas style={{ width: "95%", height:"100vh" }} ref={canvasRef} />;
}

export default CarModel;
