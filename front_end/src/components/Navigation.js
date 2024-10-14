import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from './Logo';
import {useNavigate} from 'react-router-dom';
import './/StyleComponents/NavbarStyle.css';


const Navigation = () => {
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    }

    return (
        <Navbar expand="lg" style={{fontSize: "25px",width:"100%", backgroundColor: "black"}}>
            <Navbar.Brand style={{marginLeft:"4%"}}>
                <Logo/>
            </Navbar.Brand>
            <Navbar.Toggle className="custom-toggler" style={{color: "white"}} aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
                    <Nav.Link className="nav-link-custom"  style={{ marginLeft: "40px" }} onClick={() => handleLinkClick("/")}>Accueil</Nav.Link>
                    <Nav.Link className="nav-link-custom"  style={{ marginLeft: "40px" }} onClick={() => handleLinkClick("/Piece")}>Pièce</Nav.Link>
                    <Nav.Link className="nav-link-custom"  style={{ marginLeft: "40px" }} onClick={() => handleLinkClick("/about")}>Mécanique générale</Nav.Link>
                    <Nav.Link className="nav-link-custom"  style={{ marginLeft: "40px" }} onClick={() => handleLinkClick("/catalogue")}>Achat de véhicule</Nav.Link>
                    <Nav.Link className="nav-link-custom"  style={{ marginLeft: "40px" }} onClick={() => handleLinkClick("/joindre")}>Vente d'autos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;