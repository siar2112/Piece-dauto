import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticleBox from '../components/ArticleBox';
import './/StyleComponents/ArticleSliderStyle.css';

const NextArrow = ({ onClick }) => {
    return (
        <div className="next-arrow" onClick={onClick}>
            ⫸
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className="prev-arrow" onClick={onClick}>
            ⫷
        </div>
    );
};

const ArticleSlider = ({ articles, boxStyle }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        swipeToSlide: true,
    };

    return (
        <div>
            <div style={{paddingLeft:"2%"}}>
                <Slider {...settings}>
                    {articles.map((article, index) => (
                        <div key={index}>
                            <ArticleBox className="ArticleBox" article={article} style={boxStyle} />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ArticleSlider;