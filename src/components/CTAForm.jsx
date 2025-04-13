import Modal from 'react-bootstrap/Modal';
import GreenButton from './GreenButton';
import { useState } from "react";
import CTAInput from './CTAInput';
import CTAMessage from './CTAMessage';

export default function CTAForm(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <GreenButton className="cta-form-btn" text={props.text} type="submit" onClick={handleShow} />

            <Modal
                className="modal fade"
                show={show} onHide={handleClose}
                id="CTAModal"
                tabIndex="-1"
                role="dialog"
                aria-hidden="true"
            >
                <Modal.Dialog className="modal-dialog" role="document">
                    <Modal.Header className="modal-header">
                        <div className="modal-heading">
                            <h2 className="modal-title" id="coffeeModalLabel">
                                Coffee? We'll Pay!
                            </h2>
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                            <form id="coffeeForm">
                                <div className="form-inputs">

                                    <CTAInput id="n-lname" placeholder="First name*" onKeyPress="return nameValidater(event)" />
                                    <CTAInput id="n-lname" placeholder="Last name*" onKeyPress="return nameValidater(event)" />
                                    <CTAInput id="n-email" placeholder="Work Email*" />
                                </div>
                                <CTAMessage rows="3" columns="50" />

                                <div className="modal-footer border-top-0">
                                    <GreenButton className="coffee-form-btn" text="SUBMIT" type="submit" />
                                </div>
                            </form>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal >
        </>
    )
}