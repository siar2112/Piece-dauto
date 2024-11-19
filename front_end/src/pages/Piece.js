import React, { useRef } from 'react';
import './StylePages/Piece.css';

const Piece = () => {
    const PieceFrameContainerRef = useRef(null);

    return (
        <div>
            <h1 className="piece_header">Pièces Neuves et d’Occasion</h1>
            <div className="piece">
                <div className="piece_text">
                    <p className="piece_text_1">
                        Chez Pièces d’autos usagées Ste-Julie inc., nous disposons d’un large inventaire de pièces
                        automobiles neuves et d’occasion.
                        Nous récupérons, recyclons et remettons en état les pièces des voitures dont nous faisons
                        l’acquisition. Que vous ayez besoin d’un moteur, de disques de frein ou encore de phares, nous
                        avons ce que
                        vous recherchez!
                        Dans le cas où nous ne disposons pas de la pièce auto dont vous avez besoin, il nous est
                        possible de la commander.
                    </p>
                </div>
                <div className="piece_img">
                    <img
                        src="/red-car-body-disassembled-many-vehicles-1355924789-1920w.jpg"
                        alt="piece_background"
                    />
                </div>
            </div>
            <h2 className="piece_header_2">Voici une liste des pièces que nous offrons</h2>

            {/* Iframe Container */}
            <div
                ref={PieceFrameContainerRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingTop: '56.2225%', // Maintain aspect ratio
                    overflow: 'hidden',
                    borderRadius: '8px',
                }}
            >
                <iframe
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                    }}
                    src="https://www.canva.com/design/DAGTmnnmvmQ/iU17K4Wk107bZaJDFPfMng/view?embed"
                    title="Piece_Embed"
                ></iframe>

                {/* Small Line (Hider) */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: 0, // Stick to the bottom of the container
                        left: 0,
                        width: '100%',
                        height: '40px', // Small line height
                        backgroundColor: 'white', // Color of the line
                        pointerEvents: 'none', // Ensure the line doesn't block iframe interaction
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Piece;
