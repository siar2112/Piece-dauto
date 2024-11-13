import React from 'react';
import './StylePages/Vente.css';
import Cars from "../CarsToSell/Cars";
import CarContainer from '../components/CarContainer.js';

const CarListStyles = {
    listContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(1000px, 1fr))', // Ensures responsive 3 columns max
        gap: '20px', // Space between grid items
        padding: 0,
        margin: '20px 0',
        listStyleType: 'none', // Remove bullet points
    },
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
            <ul style={CarListStyles.listContainer}>
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