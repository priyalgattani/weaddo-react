
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Cards()  {
  const cardsRef = useRef([]);
  const stackableTextRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current;
    const spacer = 30;
    const scaleVal = 0.8;

    ScrollTrigger.matchMedia({
      // large
      "(min-width: 992px)": function() {
        cards.forEach((card, index) => {
          const tween = gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: `top-=80px top+=200px`,
              end: `bottom top+=120px`,
              scrub: true,
              invalidateOnRefresh: true
            },
            ease: "none",
            scale: scaleVal
          });

          ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer/2}-80px top+=150px`,
            endTrigger: '.cards',
            end: `bottom+=90px bottom-=100px`,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        });
      },

      // medium
      "(min-width: 576px) and (max-width: 991px)": function() {
        const height = document.getElementById("stackable-text").offsetHeight;
        cards.forEach((card, index) => {
          const tween = gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: `top-=${height} bottom-=200px`,
              end: `bottom top+=550px`,
              scrub: true,
              invalidateOnRefresh: true
            },
            ease: "none",
            scale: scaleVal
          });

          ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer/2}-80px top+=450px`,
            endTrigger: '.cards',
            end: `bottom top+=500px`,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        });
      },

      // small
      "(max-width: 575px) and (min-width: 300px)": function() {
      const height = document.getElementById("stackable-text").offsetHeight;
        cards.forEach((card, index) => {
          const tween = gsap.to(card, {
            scrollTrigger: {
              trigger: card,
              start: `top-=${height} top+=310px`,
              end: `bottom top+=300px`,
              scrub: true,
              invalidateOnRefresh: true
            },
            ease: "none",
            scale: scaleVal
          });

          ScrollTrigger.create({
            trigger: card,
            start: `top-=${index * spacer/2}-80px top+=320px`,
            endTrigger: '.cards',
            end: `bottom top+=400px`,
            pin: true,
            pinSpacing: false,
            invalidateOnRefresh: true,
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill());
    };
  }, []);

  return (
    <div className='col-lg-6 cards-container'>
    <div className="cards">
      {/* <div className="stackable-text" ref={stackableTextRef}>Stackable Text</div> */}
      {[...Array(3)].map((_, index) => (
        <div className={`card c${index+1}`} ref={el => (cardsRef.current[index] = el)} key={index}>
          <img
              className="stackable-img"
              src="src\assets\media\noun-crash-6213456.png"
              alt=""
            />
            <br />
            <h3>
              Is your current MarTech stack restricting your CX potential?​
            </h3>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Cards;
