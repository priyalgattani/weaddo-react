import "./styles.css";
import React, { useEffect, useRef } from 'react';


function Statistics() {

  const currentElement = useRef();

  let counterStarted = false;

  const onScroll = () => {

    if (counterStarted) {
      return;
    }


    if (!currentElement.current) {
      return;
    }

    let offset = 100;

    const top = currentElement.current.getBoundingClientRect().top;

    if (top + offset <= window.innerHeight) {

      counterStarted = true;
      countUp();
    }
  };


  useEffect(() => {
    document.addEventListener('scroll', onScroll, true);
    return () => document.removeEventListener('scroll', onScroll, true);
  }, []);


  function countUp() {

    let interval = 1500;


    let valDisplays = document.querySelectorAll(".stats-count-up")
    valDisplays.forEach((valDisplay) => {
      let startVal = 0;
      let endVal = parseInt(valDisplay.getAttribute("dataval"));
      let duration = interval / endVal;
      let counter = setInterval(function () {
        startVal += 1;
        valDisplay.textContent = startVal;
        if (startVal == endVal) {
          clearInterval(counter);
        }
      }, duration);
    });
  }
  return (
    <section id="stats">
      <div className="animation-block">
        <img
          src="src\assets\media\blocks\block1.png"
          alt="Block Icon"
          className="icon-block block1"
        />
        <img
          src="src\assets\media\blocks\block2.png"
          alt="Block Icon"
          className="icon-block block2"
        />
        <img
          src="src\assets\media\blocks\block3.png"
          alt="Block Icon"
          className="icon-block block3"
        />
        <img
          src="src\assets\media\blocks\block4.png"
          alt="Block Icon"
          className="icon-block block4"
        />
        <img
          src="src\assets\media\blocks\block5.png"
          alt="Block Icon"
          className="icon-block block5"
        />
      </div>
      <div className="container-fluid section">
        <div className="row stats-text">
          <div className="col-lg-6 stats-h">
            <h2>Integrating AI, Data, Technology & Marketing</h2>
          </div>
          <div className="col-lg-6 stats-p">
            <p>
              It's often a challenge for organisations to ensure that all four
              pieces fit well together because of multiple POCs. But here at
              Weaddo, you get it all in one place.
            </p>
            <p>
              We've partnered with 50+ global enterprises, from established
              brands to agile startups, empowering CXOs with strategic
              transformations and driving exceptional growth
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="row" id="stats-row" ref={currentElement}>
          <div className="col-lg-4 stats-div">
            <h2>
              <span className="stats-count-up" dataval={9}>
                0
              </span>
              x
            </h2>
            <p>Growth</p>
          </div>
          <div className="col-lg-4 stats-div">
            <h2>
              <span className="stats-count-up" dataval={100}>
                0
              </span>
              %
            </h2>
            <p>Efficiency</p>
          </div>
          <div className="col-lg-4 stats-div">
            <h2>
              <span className="stats-count-up" dataval={10}>
                0
              </span>
              x
            </h2>
            <p>Retention</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
