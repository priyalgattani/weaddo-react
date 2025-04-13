import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    var settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <Slider {...settings}>
            <div className="partner">
                <img
                    src="src/assets/media/partners/google.png"
                    alt="Google"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/mailchimp.png"
                    alt="Mailchimp"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/adobe.png"
                    alt="Adobe"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/shopify.png"
                    alt="Shopify"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/netcore.png"
                    alt="Netcore"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/meta.png"
                    alt="Meta"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/optimizely.png"
                    alt="Optimizely"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/unicommerce.png"
                    alt="Unicommerce"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/amazon.png"
                    alt="Amazon"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/microsoft-dynamics-365-logo.png"
                    alt="Microsoft"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/aisensy.png"
                    alt="AiSensy"
                />
            </div>
            <div className="partner">
                <img
                    src="src/assets/media/partners/zoho.png"
                    alt="Zoho"
                />
            </div>
        </Slider>
    );
}