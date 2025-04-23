import React from 'react';
import './StylePages/AchatV1.css';
import ArticleSlider from "../components/ArticleSlider";
import Cars from "../SliderArticle/AchatCarsToShow";

const Achat = () => {

    const smallBoxStyle = {
        width: "450px",
        height: "auto",
        margin: "0 auto",
        textAlign: "center",
    };



    return (
        <div>
            <div className="AchatFirstView">
                <h1 className="WeBuyTitle">NOUS ACHETONS!!!</h1>
                <ArticleSlider articles={Cars} boxStyle={smallBoxStyle}></ArticleSlider>
                <h2 className="NoMatterWhatTitle"> Peu importe l'état de votre véhicule </h2>
            </div>


            <div className="Achat_component">
                <h1>Étape à suivre pour la vente de votre véhicule</h1>
                <ol>
                    <li>Prise de contact au <a href="tel:+15145158669">(514) 515-8669</a></li>
                    <li>Proposition du prix d’achat par téléphone</li>
                    <li>
                        Récupération du véhicule dans un délai de moins de 24h (service de remorquage gratuit)
                    </li>
                    <li>
                        Attestation de transaction avec un commerçant (ATAC) à envoyer à la SAAQ ainsi qu'un reçu
                        d'achat vous seront remis
                    </li>
                    <li>Paiement par virement ou comptant</li>
                    <li>Recyclage du véhicule</li>
                    <p>Bénéficiez du meilleur prix pour l’achat de votre véhicule usagé et/ou accidenté!</p>
                    <div className="Achat_img">
                        <img
                            src="shutterstock_1906589005-640w.jpg"
                            alt="achat_background"
                        />
                    </div>
                </ol>
            </div>
        </div>
    );
};

export default Achat;

