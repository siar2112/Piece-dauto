import React from 'react';
import {Nav} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import './/StyleComponents/FooterStyle.css';




const Footer=()=>{
    const navigate = useNavigate();

    const handleLinkClick = (path) => {
        navigate(path);
    }
    return (
        <div>
            <div className="credit">
                <ul className="credit_col_1">
                    <li>
                        <div className="logo_img">
                            <img src="/Logo%20PAU-330w.png" alt=""/>
                        </div>
                    </li>
                    <li id="second_li">
                        <p id="Book_your_place">Contactez-Nous</p>
                    </li>
                    <li>
                        <p id="Barber_credit">Pour toutes questions ou pour obtenir une estimation gratuite, n’hésitez pas à nous contacter.
                            Nous nous ferons un plaisir d’échanger avec vous et de vous donner entière satisfaction!
                        </p>
                        <Nav.Link onClick={() => handleLinkClick("/catalogue")} className="Credit_Barber">Contactez-Nous</Nav.Link>
                    </li>
                    <li>
                        <ul className="credit_logo">
                            <li>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://www.google.com/search?q=piece+d%27auto+ste+julie&rlz=1C1CHBF_enCA1126CA1126&oq=piece+d%27auto+ste+julie&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yCAgFEAAYFhgeMggIBhAAGBYYHjIICAcQABgWGB4yCggIEAAYgAQYogQyCggJEAAYgAQYogTSAQkxODExajBqMTWoAgiwAgE&sourceid=chrome&ie=UTF-8">Google</a>
                            </li>
                            <li>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://www.instagram.com">Instagram<ion-icon name="logo-instagram"></ion-icon></a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="credit_col_2">
                    <li>
                        <h1>Navigation</h1>
                    </li>
                    <li>
                        <Nav.Link onClick={() => handleLinkClick("/")}>Accueil</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link onClick={() => handleLinkClick("/Piece")}>Pièce</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link onClick={() => handleLinkClick("/Mecanique")}>Mécanique générale</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="#" onClick={() => handleLinkClick("/Achat")}>Achat de véhicule</Nav.Link>
                    </li>
                    <li>
                        <Nav.Link href="#" onClick={() => handleLinkClick("/Vente")}>Vente d'autos</Nav.Link>
                    </li>
                </ul>

                <ul className="credit_col_3">
                    <li>
                        <h1>Coordonnées</h1>
                    </li>
                    <li>
                        (450) 649-4444
                    </li>
                    <li>
                        https://pieceDautoSteJulie.com/
                    </li>
                    <li>
                        pau.stejulie@hotmail.com
                    </li>
                    <li>
                        773 Rue Saint-Jacques, Saint-Jean-sur-Richelieu, QC J3B 2M9
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <p>Copyright ©2024. Pièces d’autos usagées Ste-Julie inc. reserved.</p>
            </div>
        </div>
    );
};

export default Footer;