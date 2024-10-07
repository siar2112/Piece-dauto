import React from 'react';
import './/StyleComponents/ServiceBoxStyle.css';



const ServiceBox=({serviceTitre, style, link, imgSrc})=>{

    return (
        <div>
            <div className="ServiceBox" style={style}>
                <div style={{paddingLeft: "2%", marginTop: "2%", paddingRight: "2%", textAlign: "center"}}>
                    <h1 style={{fontSize: "45px"}}>{serviceTitre}</h1>
                </div>
                <img style={{borderTopRightRadius: "20px", borderTopLeftRadius: "20px", width: "100%",paddingBottom:'10%', height:'400px'}}
                     src={imgSrc} alt={serviceTitre}/>
            </div>
        </div>
    );
};

export default ServiceBox;