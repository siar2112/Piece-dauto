import React from 'react';
import './StylePages/AchatV1.css';
import ArticleSlider from "../components/ArticleSlider";
import Cars from "../SliderArticle/AchatCarsToShow";

const Achat = () => {

    function importAllArticles(r) {
        return r.keys().map(key => r(key).default);
    }

    const articles = importAllArticles(require.context('../SliderArticle', false, /\.js$/));

    return (
        <div>
            <div className="AchatFirstView">
                <h1>Vendre votre auto</h1>
                <ArticleSlider articles={articles}></ArticleSlider>
                <h2>Peut-importe l'état de votre véhicule, nous achetons </h2>
            </div>


            <div className="Achat_component">
                <h1>Comment procéder si vous souhaitez vendre votre véhicule?</h1>
                <ol>
                    <li>Prise de contact au (514) 515-8669</li>
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

