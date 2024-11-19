import React from 'react';
import './StylePages/Vente.css';
import Cars from "../CarsToSell/Cars";
import CarContainer from '../components/CarContainer.js';

const CarListStyles = {
    listItem: {
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    carContainerStyle: {
        border: '1px solid #ddd',
        borderRadius: '20px',
    },
};


const Vente = () => {
    return (
        <div>
            <h1 className="Vente_header">Vente d'autos</h1>
            <ul className="CarList">
                {Cars.map((car, index) => (
                    <li className={'CarContainerItem'} key={index} style={CarListStyles.listItem}>
                        <CarContainer Car={car} style={CarListStyles.carContainerStyle} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Vente;