import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './Logo';
import { useNavigate } from 'react-router-dom';
import './StyleComponents/NavbarStyle.css';
import Modal from 'react-modal';
import './/StyleComponents/ModalNav.css';

const ModalNavStyles = {
    content: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '75%',
        zIndex: '1000!important',
        border: 'solid 2px white',
        borderRadius: '20px',
        background: 'black',
        animation: 'none !important',
    },
};

const Navigation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000); // Track if it's mobile view
    const [modalIsOpen, setModalIsOpen] = useState(false); // Modal state
    const navigate = useNavigate();

    // Update `isMobile` when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1000);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleLinkClick = (path) => {
        navigate(path);
        setModalIsOpen(false); // Close modal on navigation
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            {!isMobile ? (
                <Navbar expand="lg" style={{ fontSize: '25px', width: '100%', backgroundColor: 'black' }}>
                    <Navbar.Brand style={{ marginLeft: '4%' }}>
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Toggle className="custom-toggler" style={{ color: 'white' }} aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="ml-auto"
                            style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}
                        >
                            <Nav.Link className="nav-link-custom" style={{ marginLeft: '40px' }} onClick={() => handleLinkClick('/')}>
                                Accueil
                            </Nav.Link>
                            <Nav.Link className="nav-link-custom" style={{ marginLeft: '40px' }} onClick={() => handleLinkClick('/Piece')}>
                                Pièce
                            </Nav.Link>
                            <Nav.Link className="nav-link-custom" style={{ marginLeft: '40px' }} onClick={() => handleLinkClick('/Mecanique')}>
                                Mécanique générale
                            </Nav.Link>
                            <Nav.Link className="nav-link-custom" style={{ marginLeft: '40px' }} onClick={() => handleLinkClick('/Achat')}>
                                Achat de véhicule
                            </Nav.Link>
                            <Nav.Link className="nav-link-custom" style={{ marginLeft: '40px' }} onClick={() => handleLinkClick('/Vente')}>
                                Vente d'autos
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            ) : (
                <div>
                    <div className="ModalNavtogglerContainer">
                        <Navbar.Toggle onClick={openModal} aria-controls="basic-navbar-nav" className="ModalNav-toggler"/>
                    </div>
                    <Modal isOpen={modalIsOpen}
                           onRequestClose={closeModal}
                           style={ModalNavStyles}
                           contentLabel="Example Modal">
                        <button className="ModalNavClosebutt" onClick={closeModal}><ion-icon name="close-circle-outline"></ion-icon></button>
                        <ul style={{zIndex:"10"}}>
                            <li>
                                <Nav.Link className="NavLink" style={{ marginLeft: "40px" }} onClick={() => handleLinkClick("/")}>Accueil</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link className="NavLink" style={{ marginLeft: "40px" }} onClick={() => handleLinkClick("/Piece")}>Pièce</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link className="NavLink" style={{ marginLeft: "40px" }} onClick={() => handleLinkClick("/Mecanique")}>Mécanique générale</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link className="NavLink" style={{ marginLeft: "40px" }} onClick={() => handleLinkClick("/Achat")}>Achat de véhicule</Nav.Link>
                            </li>
                            <li>
                                <Nav.Link className="NavLink" style={{ marginLeft: "40px" }} onClick={() => handleLinkClick("/Vente")}>Vente d'autos</Nav.Link>
                            </li>
                        </ul>
                    </Modal>
                </div>
            )}
        </>
    );
};

export default Navigation;
