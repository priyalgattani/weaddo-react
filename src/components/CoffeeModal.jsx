import "./styles.css";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import CTAInput from "./CTAInput";
import CTALocation from "./CTALocation";
import CTAMessage from "./CTAMessage";
import GreenButton from "./GreenButton";

export default function CoffeeModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button
        className="btn btn-dark btn-sm nav-btn btn-connect btn-connect-laptop"
        onClick={handleShow}
        type="button"
        name="button"
      >
        <i>Coffee? We'll pay!</i>
      </button>
      <Modal
        className="modal fade modal-fullscreen"
        show={show}
        onHide={handleShow}
        id="coffeeModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <Modal.Dialog className="modal-dialog" role="document">
          <Modal.Header className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="modal-heading col-lg-5">
                <h2 className="modal-title" id="coffeeModalLabel">
                  Embark on a Journey of Innovation with{" "}
                </h2>
                <img
                  className="logo"
                  src="src\assets\media\logo.png"
                  alt="WeAddo"
                />
              </div>
              <div className="modal-body col-lg-7">
                <form id="coffeeForm">
                  <div className="form-inputs row">

                    <CTAInput width="col-sm-6" id="n-lname" placeholder="First name*" onKeyPress="return nameValidater(event)" />
                    <CTAInput width="col-sm-6" id="n-lname" placeholder="Last name*" onKeyPress="return nameValidater(event)" />
                    <CTAInput width="col-sm-6" id="n-email" placeholder="Work Email*" />
                    <CTAInput width="col-sm-6" id="n-job" placeholder="Job Title*" />
                    <CTAInput width="col-sm-6" id="n-company" placeholder="Company*" />
                    <CTALocation width="col-sm-6" />
                  </div>
                  <CTAMessage rows="3" columns="50" />

                  <div className="modal-footer border-top-0">
                    <GreenButton className="coffee-form-btn" text="START YOUR JOURNEY" type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    </>
  );
}
