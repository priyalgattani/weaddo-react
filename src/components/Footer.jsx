import FooterForm from "@/components/FooterForm.jsx";
import JoinTheMovement from "@/components/JoinTheMovement.jsx";
import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      <JoinTheMovement />
      <hr />
      <footer className="container">
        <div className="row">
          <div className="col-lg-6 footer-text">
            <h2>We Speak your language & would love to hear from you</h2>
            <div className="socials">
              <button
                className="btn btn-outline-dark social-btn"
                href="https://www.facebook.com"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </button>
              <button
                className="btn btn-outline-dark social-btn"
                type="button"
                name="button"
              >
                <i className="fa-brands fa-instagram"></i>
              </button>
              <button
                className="btn btn-outline-dark social-btn"
                type="button"
                name="button"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </button>
              <button
                className="btn btn-outline-dark social-btn"
                type="button"
                name="button"
              >
                <i className="fa-brands fa-youtube"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5">
            <div className="footer-comment row">
              <div className="footer-comment-dot">
                <p> </p>
              </div>
              <div className="footer-comment-text">
                <p>
                  Hey!
                  <br />
                  Please fill out following quick questions so our team can get
                  in touch with you.
                </p>
              </div>
            </div>

            <FooterForm />
          </div>
        </div>
        <div className="copyright-div">
          <p className="copyright">
            <i className="fa-regular fa-copyright" aria-hidden="true"></i>{" "}
            Copyright 2024 | WeAddo
          </p>
        </div>
      </footer>
    </div>
  );
}
