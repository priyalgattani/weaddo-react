import CTAForm from "./CTAForm";
import "./styles.css";

export default function JoinTheMovement() {
  return (
    <>
      <section id="join">
        <div className="container-fluid section">
          <div className="row movement-img">
            <div className="col-md-6 movement-h">
              <h2>Join the Movement</h2>
            </div>
            <div className="col-md-6 movement-btn">
              <CTAForm type="button" text="LET'S BEGIN" />
            </div>
          </div>
          <div className="movement-text">
            <p>
              Reach out to us. Together, we'll chart a course through the
              digital landscape that's as unique as your business.
              <br />
              Your CX transformation stars with WeAddo.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
