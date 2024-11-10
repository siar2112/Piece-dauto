import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './StylePages/CarDetails.css';
import InputTextField from "../components/InputTextField.js";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        color:"white",
        marginRight: '-50%',
        textAlign:"justify",
        transform: 'translate(-50%, -50%)',
        width:'50%',
        zIndex:'1000!important',
        border:'solid 2px white',
        borderRadius:'20px',
        background:'black',
        fontSize:'2vw'
    },
};

const CarDetails = () => {
    const location = useLocation();
    const { car } = location.state || {}; // Get the car data from location state

    const containerRef = useRef(null);

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [content, setContent] = useState('');

    //Mobile view for the modal
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const mobileStyles = {
        content: {
            top: '50%',
            left: '50%',
            width: '80%',
            fontSize: '3.5vw',
            zIndex:'1000!important',
            border:'solid 2px white',
            borderRadius:'20px',
            background:'black',
            color:'white',
            right: 'auto',
            bottom: 'auto',
            transform: 'translate(-50%, -50%)',
        }
    };

    const finalStyles = windowWidth <= 768 ? { ...customStyles, ...mobileStyles } : customStyles;

    const openModal = (modalContent) => {
        setContent(modalContent);
        setIsOpen(true);
    };


    function closeModal() {
        setIsOpen(false);
    }



    useEffect(()=>{
        const bodyHtml=document.querySelector("body");
        bodyHtml.style.overflow="auto";
    },[]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const isValidNameOrSubject = (str) => /^[a-zA-Z-' ]+$/.test(str);
    const isValidEmail = (str) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(str);
    const isValidMessage = (str) => {
        // Check against any suspicious patterns or tags
        if (/\<.*\>/.test(str)) return false;
        // Add more validation if needed
        return true;
    };



    const handleSubmit = async (event)=>{
        event.preventDefault();
        //verify input
        for (let property in formData) {
            if (formData[property] === '') {
                openModal('Please fill al data');
                return;
            }
        }

        if (!isValidNameOrSubject(formData.firstName) ||
            !isValidNameOrSubject(formData.lastName) ||
            !isValidEmail(formData.email) ||
            !isValidMessage(formData.message)) {
            openModal('Invalid input');
            return;
        }

        openModal("Message is being sent");
        const response = await fetch('/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        });
        if (response.ok){
            closeModal();
            openModal('Message successfully sent!');
        }
        else{
            closeModal();
            openModal('An error occurred while sending the message. Please retry');
        }
    }

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

            <h1 className={'CarHeader'}>{car.name}</h1>

            {/* Cloudinary Gallery */}
            <div ref={containerRef} style={{maxWidth: '900px', margin: 'auto'}}></div>

            <ul className={'CarDetailsList'}>
                <li>
                    <p1 className={'CarPrice'}>Prix: {car.price}$</p1>
                </li>
                <li>
                    <p2 className={'CarKm'}>Kilométrage: {car.km} km</p2>
                </li>
                <li>
                    <p3 className={'CarDescription'}>{car.description}</p3>
                </li>
            </ul>

            <h4 className={'FormHeader'}>Veuillez entrer vos informations ci-dessous pour manifester votre intérêt</h4>

            <form onSubmit={handleSubmit}>
                <ul className="createAccountList" style={{
                    listStyleType: "none",
                    textAlign: "center",
                    marginTop: "5%",
                    paddingRight: "20%",
                    paddingLeft: "20%",
                    paddingBottom: "5%",
                }}>
                    <li style={{position: "relative"}}>
                        <InputTextField name="firstName" onChange={handleChange} type="text"
                                        label="Nom prénom"></InputTextField>
                    </li>
                    <li style={{position: "relative"}}>
                        <InputTextField name="lastName" onChange={handleChange} type="tel"
                                        label="Numéro de téléphone" pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}></InputTextField>
                    </li>
                    <li style={{position: "relative"}}>
                        <InputTextField name="email" onChange={handleChange} type="email"
                                        label="Adresse Email"></InputTextField>
                    </li>
                    <li style={{position: "relative",marginTop:"10%"}}>
                        <textArea placeholder="Informations supplémentaires" className="MessageTextArea"  maxLength="2000"  name="message" onChange={handleChange} type="text"
                                  label="Message"></textArea>
                    </li>
                    <li style={{marginTop: "10%"}}>
                        <input className="submit_button" type="submit" value="Envoyer"/>
                    </li>
                </ul>
            </form>



            <Modal isOpen={modalIsOpen}
                   onRequestClose={closeModal}
                   style={finalStyles}
                   contentLabel="Example Modal">
                <button className="ModalClosebutt" onClick={closeModal}><ion-icon name="close-circle-outline"></ion-icon></button>
                <div>
                    <h1>Message status:</h1>
                    <p>
                        {content}
                    </p>
                </div>
            </Modal>

        </div>
    );
};

export default CarDetails;
