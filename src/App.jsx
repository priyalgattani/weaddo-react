import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import GlobalInsights from "./components/GlobalInsights.jsx";
import Partners from "./components/Partners.jsx";
import Challenges from "./components/Challenges.jsx";
import Statistics from "./components/Statistics.jsx";
import DataAI from './components/DataAI.jsx';
import StackableSection from './components/StackableSection.jsx';
import GreenButton from './components/GreenButton.jsx';
import CTAForm from './components/CTAForm.jsx';

function App() {

  return (
    <>

      <Header />

      <section id="title">
        <div className="container-fluid gif-container">
          <div className="customer-heading">
            <h1>
              Want to know your <span>Customer</span>footprints and insights?
            </h1>
          </div>
          <div className="customer-text">
            <p>
              Find out what your customers and potential customers are eyeing.
            </p>
            {/* <GreenButton  type="button" text="LET'S CATCH UP?" /> */}
            <CTAForm type="button" text="LET'S CATCH UP?"/>
          </div>
        </div>
      </section>

      <Statistics />
      <StackableSection />
      <DataAI />
      <Partners />
      <section id="challenges">
        <div className="container-fluid section">
          <div className="challenges-h">
            <h2>Solved 40+ Global MarTech Mismatch Challenges</h2>
          </div>
          <Challenges />
          <button className="btn btn-green btn-sm" type="button" name="button">
            SHOW ME SUCCESS
          </button>
        </div>
      </section>
      <GlobalInsights />
      <Footer />

    </>
  )
}

export default App
