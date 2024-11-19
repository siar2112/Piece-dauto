import React, {useRef} from 'react';
import './/StyleComponents/Zone.css';
import useIntersectionObserver from "./useIntersectionObserver";

const Zone = () => {

    const ZoneLeftTextRef = useRef(null);
    const isZoneLeftTextRefVisible = useIntersectionObserver(ZoneLeftTextRef);


    return (
        <div className="zone-container">
            <div className="zone-infos-left">
                <div ref={ZoneLeftTextRef} className={`zone-text ${isZoneLeftTextRefVisible ? 'visible' : ''}`}>
                    <h1>Zone de service</h1>
                    <p style={{fontSize:'1.4vw', marginTop:'2%'}}>
                        Notre entreprise dessert toute la Rive-Sud, la
                        Rive-Nord et Montréal, dans un rayon de 50 kilomètres de
                        Sainte-Julie. Que vous soyez de Longueuil, Varennes ou Brossard, vous
                        pouvez compter sur notre équipe de professionnels.
                    </p>
                </div>
                <table className="zone-address">
                    <tbody>
                    <tr>
                        <th style={{width: '15%'}}>Adresse:</th>
                        <th style={{fontWeight: 'normal'}}>
                            1002 Rue De Touraine Sainte-Julie, QC J3E 1Y2
                        </th>
                    </tr>
                    <tr>
                        <th>Courriel:</th>
                        <th style={{fontWeight: 'normal'}}>pau.stejulie@hotmail.com</th>
                    </tr>
                    <tr>
                        <th>Téléphone: </th>
                        <th style={{fontWeight: 'normal'}}> (844) 649-4445</th>
                    </tr>
                    </tbody>
                </table>
            </div>

            <div className="zone-infos-right">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2790.265138846956!2d-73.34532198693822!3d45.62540972254574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc8fdc797e8f7f5%3A0xd6c2382e7c8193b3!2sPi%C3%A8ces%20d&#39;autos%20usag%C3%A9es%20Ste-Julie!5e0!3m2!1sen!2sca!4v1726365044333!5m2!1sen!2sca"
                    width="600"
                    height="600"
                    style={{ border: 0 }}
                    loading="lazy"
                    title="Google Map"
                ></iframe>

                <table className="zone-schedule">
                    <caption>Heures d'ouverture</caption>
                    <tbody>
                    <tr>
                        <th  style={{ width: '50%' }}>Lundi:</th>
                        <th style={{ fontWeight: 'normal' }}>8h00 - 17h00</th>
                    </tr>
                    <tr>
                        <th style={{ width: '50%' }}>Mardi:</th>
                        <th style={{ fontWeight: 'normal' }}>8h00 - 17h00</th>
                    </tr>
                    <tr>
                        <th style={{ width: '50%' }}>Mercredi:</th>
                        <th style={{ fontWeight: 'normal' }}>8h00 - 17h00</th>
                    </tr>
                    <tr>
                        <th style={{ width: '50%' }}>Jeudi:</th>
                        <th style={{ fontWeight: 'normal' }}>8h00 - 17h00</th>
                    </tr>
                    <tr>
                        <th style={{ width: '50%' }}>Vendredi:</th>
                        <th style={{ fontWeight: 'normal' }}>8h00 - 17h00</th>
                    </tr>
                    <tr>
                        <th style={{ width: '50%' }}>Samedi:</th>
                        <th style={{ fontWeight: 'normal' }}>Fermé</th>
                    </tr>
                    <tr>
                        <th style={{ width: '50%' }}>Dimanche:</th>
                        <th style={{ fontWeight: 'normal' }}>Fermé</th>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Zone;
