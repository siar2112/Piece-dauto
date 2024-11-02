import React from 'react';
import './StylePages/Piece.css';

const Piece = () => {
    return (
        <div>
            <h1 className="piece_header">Pièces Neuves et d’Occasion</h1>
            <div className="piece">
                <div className="piece_text">
                    <p1 className="piece_text_1">
                        Chez Pièces d’autos usagées Ste-Julie inc., nous disposons d’un large inventaire de pièces
                        automobiles neuves et d’occasion.
                        Nous récupérons, recyclons et remettons en état les pièces des voitures dont nous faisons
                        l’acquisition. Que vous ayez besoin d’un moteur, de disques de frein ou encore de phares, nous
                        avons ce que
                        vous recherchez!
                        Dans le cas où nous ne disposons pas de la pièce auto dont vous avez besoin, il nous est
                        possible de la commander.
                    </p1>
                </div>
                <div className="piece_img">
                    <img src="/red-car-body-disassembled-many-vehicles-1355924789-1920w.jpg"
                         alt="piece_background"/>
                </div>
            </div>
            <div className="piece_2">
            </div>
        </div>
    );
};

export default Piece;
