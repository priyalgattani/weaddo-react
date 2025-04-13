import "./styles.css";
import React, { useState, useRef, useEffect } from 'react';

function Challenges() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const slidesRef = useRef(null);


  useEffect(() => {
    showSlides(currentSlide);
  }, [currentSlide]); // Run only when currentSlide changes

  const showSlides = (slideIndex) => {
    if (!slidesRef.current) return; // Handle potential null reference
    const slides = slidesRef.current.querySelectorAll('.challengesSlides');


    slides.forEach((slide) => {
      slide.style.display = 'none';
    });

    slides[slideIndex - 1].style.display = 'block';
  };

  const nextSlide = () => {
  const slides = slidesRef.current.querySelectorAll('.challengesSlides');
    
    const nextIndex = (currentSlide + 1) % slides.length;
    if (nextIndex === 0) {
        setCurrentSlide(slides.length);
    } else {
        setCurrentSlide(nextIndex);
    }
};

  
  const prevSlide = () => {
  const slides = slidesRef.current.querySelectorAll('.challengesSlides');

    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    if (currentSlide === 1) {
        setCurrentSlide(slides.length); // Set to the first slide's index
    } else {
        setCurrentSlide(prevIndex);
    }
};
  return (
    <div ref={slidesRef} className="challenges-carousel slideshow-container">
      <div className="challengesSlides challenges-fade">
        <div className="numbertext">
          <span>01/</span>03
        </div>
        <div className="img">
          <img
            src="src\assets\media\Rectangle 528.png"
            style={{ width: "100%" }}
          />
          <div className="challenges-text">
            <h2>
              Business Transformation & <br />
              Growth Delivered
            </h2>
            <p>
              End to End Automation with 2x Returns <br />A leading Ceramic
              Brand - India
            </p>
          </div>
        </div>
      </div>

      <div className="challengesSlides challenges-fade">
        <div className="numbertext">
          <span>02/</span>03
        </div>
        <div className="img">
          <img
            src="src\assets\media\Rectangle 528.png"
            style={{ width: "100%" }}
          />
          <div className="challenges-text">
            <h2>
              Business Transformation & <br />
              Growth Delivered
            </h2>
            <p>
              End to End Automation with 2x Returns <br />A leading Ceramic
              Brand - India
            </p>
          </div>
        </div>
      </div>

      <div className="challengesSlides challenges-fade">
        <div className="numbertext">
          <span>03/</span>03
        </div>
        <div className="img">
          <img
            src="src\assets\media\Rectangle 528.png"
            style={{ width: "100%" }}
          />
          <div className="challenges-text">
            <h2>
              Business Transformation & <br />
              Growth Delivered
            </h2>
            <p>
              End to End Automation with 2x Returns <br />A leading Ceramic
              Brand - India
            </p>
          </div>
        </div>
      </div>

      <button className="prev" onClick={prevSlide}>❮</button>
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Challenges;
