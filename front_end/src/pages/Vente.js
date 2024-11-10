import React from 'react';
import './StylePages/Vente.css';
import Cars from "../CarsToSell/Cars";
import CarContainer from '../components/CarContainer.js';

const CarListStyles = {
    listContainer: {
        listStyleType: 'none',
        padding: 0,
        margin: '20px 0',
    },
    listItem: {
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    carContainerStyle: {
        width: '100%', // Full width in block layout
        maxWidth: '600px', // Set a max width for readability
        border: '1px solid #ddd',
        borderRadius: '20px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    },
};


const Vente = () => {
    return (
        <div>
            <h1 className="Vente_header">Vente d'autos</h1>
            <ul style={CarListStyles.listContainer}>
                {Cars.map((car, index) => (
                    <li key={index} style={CarListStyles.listItem}>
                        <CarContainer Car={car} style={CarListStyles.carContainerStyle} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Vente;