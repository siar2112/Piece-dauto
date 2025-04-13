import React from 'react';
import './/StyleComponents/ArticleBootstrapCarouselStyle.css';



const ArticleBootstrapCarousel=({img1, img2,img3,img4,img5})=>{
    return (
        <div id="Bosscut_Carousel" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true">
            <ol className="carousel-indicators">
                <li data-bs-target="#Bosscut_Carousel" data-bs-slide-to="0" className="active" aria-current="true"
                    aria-label="Slide 1"></li>
                <li data-bs-target="#Bosscut_Carousel" data-bs-slide-to="1" aria-label="Slide 2"></li>
                <li data-bs-target="#Bosscut_Carousel" data-bs-slide-to="2" aria-label="Slide 3"></li>
                <li data-bs-target="#Bosscut_Carousel" data-bs-slide-to="3" aria-label="Slide 4"></li>
                <li data-bs-target="#Bosscut_Carousel" data-bs-slide-to="4" aria-label="Slide 5"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 slide_img" src={img1} alt="First slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 slide_img" src={img2} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 slide_img" src={img3} alt="Third slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 slide_img" src={img4} alt="Fourth slide"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 slide_img" src={img5} alt="Fifth slide"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#Bosscut_Carousel"
                    data-bs-slide="prev" data-mdb-ripple-color="gold">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next " type="button" data-bs-target="#Bosscut_Carousel"
                    data-bs-slide="next" data-mdb-ripple-color="gold">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default ArticleBootstrapCarousel;