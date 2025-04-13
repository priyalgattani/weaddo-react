import "./styles.css";
import React from "react";
import SimpleSlider from "./InsightsSlider";
import InsightArticle from "./InsightArticle";
import GreenButton from "./GreenButton";


function GlobalInsights() {

  return (
    <section id="insights-opinions">
      <div id="insights-opinions" className="container-fluid section">
        <div className="row">
          <div className="insights-h col-md-10">
            <h2>
              Global Martch Insights <br />& Opinions
            </h2>
          </div>
          <div className="col-md-2 insights-btn">
            <GreenButton text="VIEW ALL" type="button" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-5">
            <div className="insights-carousel slick-carousel">
              <SimpleSlider />

            </div>
          </div>
          <div className="col-lg-7 row insight-articles">
            <InsightArticle img="src\assets\media\Rectangle 156.png" title="Vestibulum non ipsum tincidunt" author="Mario" />
            <InsightArticle img="src\assets\media\Rectangle 157.png" title="Measuring Martch ROI- Key success of Retail/Ecom/D2C" author="Mario" />
            <InsightArticle img="src\assets\media\Rectangle 158.png" title="Leap in the change of Google algorithms 2024" author="Mario" />
            <InsightArticle img="src\assets\media\Rectangle 159.png" title="Proin quis arcu nec tortor" author="Mario" />
          </div>
        </div>
      </div>
    </section>
  );
}



export default GlobalInsights;
