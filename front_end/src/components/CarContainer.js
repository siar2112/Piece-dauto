import React from 'react';
import { useNavigate } from 'react-router-dom';
import './/StyleComponents/CarContainer.css';

const CarContainer=({Car, style})=>{

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/car-details', { state: { car: Car } });
    };

    return (
        <div>
            <div onClick={handleClick} className="CarContainer" style={style}>
                <img style={{borderTopRightRadius:"20px", borderTopLeftRadius:"20px"}} src={Car.image} alt={Car.name}/>
                <div style={{paddingLeft:"2%", marginTop:"2%",paddingRight:"2%",textAlign:"center"}}>
                    <h1 style={{fontSize:"35px"}}>{Car.name}</h1>
                    <p1 style={{fontSize:"25px"}}>Prix: {Car.price}$</p1>
                    <br/>
                    <p2 style={{fontSize:"25px"}}>Kilométrage: {Car.km}km </p2>
                    <br/>
                    <p3 style={{fontSize:"25px"}}>{Car.description}</p3>
                </div>
            </div>
        </div>
    );
};

export default CarContainer;