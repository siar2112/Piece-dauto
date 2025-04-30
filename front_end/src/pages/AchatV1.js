import React, { useMemo,useEffect, useState, useRef } from 'react';
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

    const [currentStep, setCurrentStep] = useState(0);
    const scrollableRef = useRef(null);

    const steps = useMemo(() => [
        "1. Prise de contact au (514) 515-8669",
        "2. Proposition du prix d’achat par téléphone",
        "3. Récupération du véhicule dans un délai de moins de 24h (service de remorquage gratuit)",
        "4. Attestation de transaction avec un commerçant (ATAC) à envoyer à la SAAQ ainsi qu'un reçu d'achat",
        "5. Paiement par virement ou comptant",
        "6. Recyclage du véhicule"
    ], []);

    const animations = [
        'fade-in',
        'slide-in-left',
        'slide-in-right',
        'zoom-in',
        'flip-in',
        'fade-in'
    ];


    useEffect(() => {
        const totalSteps = steps.length;

        const handleScroll = () => {
            const container = scrollableRef.current;
            if (!container) return;

            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight - container.clientHeight;
            const scrollFraction = scrollTop / scrollHeight;

            const newStep = Math.min(
                totalSteps - 1,
                Math.floor(scrollFraction * totalSteps)
            );

            setCurrentStep(newStep);
        };

        const container = scrollableRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, [steps]); // ✅ valid and clean


    return (
        <div>
            <div className="AchatFirstView">
                <h1 className="WeBuyTitle">NOUS ACHETONS!!!</h1>
                <ArticleSlider articles={Cars} boxStyle={smallBoxStyle} />
                <h2 className="NoMatterWhatTitle">Peu importe l'état de votre véhicule</h2>
            </div>

            <div className="Achat_component">
                <h1 style={{ paddingBottom: "5%" }}>Étape à suivre pour la vente de votre véhicule</h1>
                <div className="scrollable" ref={scrollableRef} style={{ height: "80vh", overflowY: "scroll" }}>
                    {steps.map((text, index) => (
                        <div
                            key={index}
                            className={`step${index + 1} ${currentStep === index ? animations[index] : ''}`}
                            style={{
                                opacity: currentStep === index ? 1 : 0,
                                pointerEvents: currentStep === index ? 'auto' : 'none',
                                minHeight: "70vh",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                padding: "20px",
                                transition: 'all 0.5s ease-in-out',
                                paddingBottom:"10%"

                            }}
                        >
                            <div>
                                <h1 className="stepTitle">
                                    {index === 0 ? (
                                        <>
                                            1. Prise de contact au{' '}
                                            <a href="tel:+15145158669" style={{ color: "#1d4ed8" }} className="phone-link">
                                                (514) 515-8669
                                            </a>
                                        </>
                                    ) : (
                                        text
                                    )}
                                </h1>
                            </div>
                            <div>
                                <img
                                    src="shutterstock_1906589005-640w.jpg"
                                    alt="achat_background"
                                    style={{ maxWidth: "500px", height: "auto" }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <h1 className="Beneficier" style={{ padding: "50px 0" }}>
                    Bénéficiez du meilleur prix pour l’achat de votre véhicule usagé et/ou accidenté!
                </h1>
            </div>
        </div>
    );
};

export default Achat;
