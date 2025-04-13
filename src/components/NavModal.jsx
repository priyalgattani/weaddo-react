import "./styles.css";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

export default function NavModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className="btn btn-outline-dark btn-lg nav-btn btn-menu"
        type="button"
        name="button"
        id="menuToggle"
        onClick={handleShow}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      <Modal
        show={show}
        onHide={handleShow}
        className="modal fade"
        id="navModal"
        tabIndex="-1"
      >
        <Modal.Dialog>
            <Modal.Header className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleClose}
              >
                <i className="fa-solid fa-xmark" style={{ color: "white" }}></i>
              </button>
            </Modal.Header>
            <Modal.Body className="modal-body">
              <div className="container-fluid row">
                <div className="col-lg-10 row">
                  <div className="col-md-3">
                    <h3>About</h3>
                    <ul className="nav-list">
                      <li>
                        <a className="nav-link" href="#">
                          Who we are?
                        </a>{" "}
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Leadership Team
                        </a>{" "}
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Work with us
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h3>Solutions</h3>
                    <ul className="nav-list">
                      <li>
                        <a className="nav-link" href="#">
                          CX Transformation
                        </a>{" "}
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Demand & Engagement
                        </a>{" "}
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          AI & Analytics
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h3>Industries</h3>
                    <ul className="nav-list">
                      <li>
                        <a className="nav-link" href="#">
                          Omni Channel Retail
                        </a>{" "}
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          D2C Ecommerce
                        </a>{" "}
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Healthcare
                        </a>{" "}
                      </li>
                      <li>
                        <a className="nav-link" href="#">
                          Education
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3">
                    <h3>Community</h3>
                    <h3>Case Study</h3>
                    <h3>Insights</h3>
                    <h3>Career</h3>
                  </div>
                </div>
                <div className="col-lg-2 nav-img-div">
                  <img
                    className="nav-img"
                    src="src\assets\media\Rectangle 2222.png"
                    alt="Let's Connect"
                  />
                </div>
              </div>
            </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
}
