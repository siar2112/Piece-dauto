import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import './/StyleComponents/ModalNav.css';
import Modal from 'react-modal';

const ModalNavStyles = {
    content: {
        position:'absolute',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:'75%',
        zIndex:'1000!important',
        border:'solid 2px white',
        borderRadius:'20px',
        background:'black',
        animation: 'none !important'

    },
};


const ModalNav = () => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    const handleLinkClick = (path) => {
        navigate(path);
        closeModal();
    }

    return (

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
    )
}

export default ModalNav;