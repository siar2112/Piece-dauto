import React from 'react';
import './StylePages/Achat.css';

const Achat = () => {
    return (
        <div>
            <div style={{
                position: 'relative',
                width: '100%',
                height: 0,
                paddingTop: '56.2225%',
                paddingBottom: 0,
                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                marginBottom: '0.9em',
                overflow: 'hidden',
                willChange: 'transform'
            }}>
                <iframe
                    loading="lazy"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        top: 0,
                        left: 0,
                        border: 'none',
                        padding: 0,
                        margin: 0
                    }}
                    src="https://www.canva.com/design/DAGTleEkaKM/lxeakZyPeluvoMMTXpgSEg/view?embed"
                    title="Canva Embed"
                ></iframe>
            </div>
            <div className="Achat_component">
                <h1>Comment procéder si vous souhaitez vendre votre véhicule?</h1>
                <ol>
                    <li>
                        Prise de contact au (514) 515-8669
                    </li>
                    <li>
                        Proposition du prix d’achat par téléphone
                    </li>
                    <li>
                        Récupération du véhicule dans un délai de moins de 24h (service de remorquage gratuit)
                    </li>
                    <li>
                        Attestation de transaction avec un commerçant (ATAC) à envoyer à la SAAQ ainsi qu'un reçu
                        d'achat vous seront remis
                    </li>
                    <li>
                        Paiement par virement ou comptant
                    </li>
                    <li>
                        Recyclage du véhicule
                    </li>
                    <p>Bénéficiez du meilleur prix pour l’achat de votre véhicule usagé et/ou accidenté!</p>
                    <div className="Achat_img">
                        <img src="shutterstock_1906589005-640w.jpg"
                             alt="achat_background"/>
                    </div>
                </ol>

            </div>
        </div>
    );
};

export default Achat;
