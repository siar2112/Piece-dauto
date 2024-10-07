import React from 'react';
import './/StyleComponents/HomePresentation.css';



const HomePresentation = () => {

    return (

        <div>
            <div className="HomePresentationContainer">
                <h1 style={{ fontSize: '50px', fontWeight: 'bold', color: 'white', paddingTop: '5%' }}>
                    Pièces d’autos usagées Ste-Julie inc.
                </h1>
                <h2 style={{ fontSize: '30px', color: 'white', paddingTop: '2%' }}>
                    Pièces Automobiles Recyclées et Mécanique Générale
                    sur la Rive-Sud, la Rive-Nord Et montréal
                </h2>
                <p style={{paddingTop:"5%"}}>
                    Une expertise de plus de 40 ans
                    Basé à Sainte-Julie, Pièces d’autos usagées Ste-Julie inc. est votre référence en matière de pièces auto
                    et mécanique générale sur la Rive-Sud, la Rive-Nord et Montréal.
                    Notre entreprise rachète vos véhicules pour ensuite les recycler. Grâce à nos 40 années d’expertise,
                    nous pouvons donner une deuxième vie à toutes pièces automobiles.

                </p>
            </div>
        </div>
    )
}

export default HomePresentation;