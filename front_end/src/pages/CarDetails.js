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
        Car: car?.name,
        Name: '',
        phoneNumber: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const isValidNameOrSubject = (str) => /^[a-zA-Z](?!.*[-']{2})[a-zA-Z-' ]*[a-zA-Z]$/.test(str.trim());

    const isValidEmail = (str) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(str.trim());

    const isValidMessage = (str) => {
        // Check against HTML tags
        if (/</.test(str) || />/.test(str)) return false;

        // Ensure meaningful content (at least 3 non-space characters)
        if (str.trim().length < 3) return false;

        return true;
    };

    const validateForm = () => {
        let errors = [];

        if (!isValidNameOrSubject(formData.Name)) {
            errors.push("Le nom ou sujet est invalide.");
        }

        if (!/^\d{10}$/.test(formData.phoneNumber)) { // Assuming 10-digit phone numbers
            errors.push("Le numéro de téléphone est invalide.");
        }

        if (!isValidEmail(formData.email)) {
            errors.push("L'email est invalide.");
        }

        if (!isValidMessage(formData.message)) {
            errors.push("Le message est invalide.");
        }

        if (errors.length > 0) {
            openModal(errors.join("\n")); // Show all errors in the modal
            return false;
        }

        return true; // Form is valid
    };




    const handleSubmit = async (event)=>{
        event.preventDefault();
        //verify input
        for (let property in formData) {
            if (formData[property] === '') {
                openModal('Please fill all data');
                return;
            }
        }

        if (!validateForm()){
            return;
        }

        openModal("Le message est en cours d'envoi. Veuillez patienter.");
        const response = await fetch('/vente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
            credentials: 'include'
        });
        if (response.ok){
            closeModal();
            openModal('Intérêt envoyé avec succès!');
        }
        else{
            closeModal();
            openModal('Une erreur est survenue lors de l’envoi de votre intérêt. Veuillez réessayer plus tard.');
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
                        <InputTextField name="Name" onChange={handleChange} type={"text"}
                                        label="Nom prénom"></InputTextField>
                    </li>
                    <li style={{position: "relative"}}>
                        <InputTextField name="phoneNumber" onChange={handleChange} type={"text"}
                                        label="Numéro de téléphone"></InputTextField>
                    </li>
                    <li style={{position: "relative"}}>
                        <InputTextField name="email" onChange={handleChange} type={"email"}
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
