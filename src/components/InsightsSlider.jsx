import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    };
    return (
        <Slider {...settings}>
            <div>
                <div className="insight">
                    <img
                        className="insight-img"
                        src="src\assets\media\Rectangle 152.png"
                        alt="Article Image"
                    />
                    <div className="col-md-11">
                        <b>
                            Unlocking the Power of Martech Integration for Business
                            Growth
                        </b>
                        <br />
                        <a className="insights-a" href="#">By Mario</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="insight">
                    <img
                        className="insight-img"
                        src="src\assets\media\Rectangle 152.png"
                        alt="Article Image"
                    />
                    <div className="col-md-11">
                        <b>
                            Unlocking the Power of Martech Integration for Business
                            Growth
                        </b>
                        <br />
                        <a className="insights-a" href="#">By Mario</a>
                    </div>
                </div>
            </div>
            <div>
                <div className="insight">
                    <img
                        className="insight-img"
                        src="src\assets\media\Rectangle 152.png"
                        alt="Article Image"
                    />
                    <div className="col-md-11">
                        <b>
                            Unlocking the Power of Martech Integration for Business
                            Growth
                        </b>
                        <br />
                        <a className="insights-a" href="#">By Mario</a>
                    </div>
                </div>
            </div>
        </Slider>
    );
}