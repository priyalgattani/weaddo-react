import React, { useState } from 'react';

const FooterForm = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const [formValues, setFormValues] = useState({
        fname: '',
        lname: '',
        email: '',
        phone: ''
    });
    const [validStatus, setValidStatus] = useState({
        fname: true,
        lname: true,
        email: true,
        phone: true
    });
    const [steps, setSteps] = useState([false, false, false, false]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
        // Clear validation status when user starts typing
        setValidStatus({
            ...validStatus,
            [name]: true
        });
    };

    const validateForm = () => {
        let isValid = true;
        let newValidStatus = { ...validStatus };

        if (currentTab === 0 || currentTab === 1) {
            const namePattern = /^[a-zA-Z ]+$/;
            const name = currentTab === 0 ? 'fname' : 'lname';
            if (!namePattern.test(formValues[name])) {
                newValidStatus[name] = false;
                isValid = false;
            } else {
                newValidStatus[name] = true;
            }
        }

        if (currentTab === 2) {
            const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailPattern.test(formValues.email)) {
                newValidStatus.email = false;
                isValid = false;
            } else {
                newValidStatus.email = true;
            }
        }

        if (currentTab === 3) {
            const phonePattern = /^[6-9]\d{9}$/;
            if (!phonePattern.test(formValues.phone)) {
                newValidStatus.phone = false;
                isValid = false;
            } else {
                newValidStatus.phone = true;
            }
        }

        setValidStatus(newValidStatus);

        if (isValid) {
            let newSteps = [...steps];
            newSteps[currentTab] = true;
            setSteps(newSteps);
        }

        return isValid;
    };

    const nextPrev = (n) => {
        if (n === 1 && !validateForm()) return;
        setCurrentTab(currentTab + n);
    };

    return (
        <div className="footer-form">
            <form id="regForm" >
                <div className="tab" style={{ display: currentTab === 0 ? 'block' : 'none' }}>
                    <p>
                        <input
                            id="f-fname"
                            placeholder="First name"
                            name="fname"
                            value={formValues.fname}
                            onChange={handleInputChange}
                            className={!validStatus.fname ? 'invalid' : ''}
                        />
                        <button type="button" id="nextBtn" onClick={() => nextPrev(1)}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </p>
                    {!validStatus.fname && <span className="invalid-text">Please enter a valid Name</span>}
                </div>
                <div className="tab" style={{ display: currentTab === 1 ? 'block' : 'none' }}>
                    <p>
                        <input
                            id="f-lname"
                            placeholder="Last name"
                            name="lname"
                            value={formValues.lname}
                            onChange={handleInputChange}
                            className={!validStatus.lname ? 'invalid' : ''}
                        />
                        <button type="button" id="nextBtn" onClick={() => nextPrev(1)}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </p>
                    {!validStatus.lname && <span className="invalid-text">Please enter a valid Name</span>}
                </div>
                <div className="tab" style={{ display: currentTab === 2 ? 'block' : 'none' }}>
                    <p>
                        <input
                            id="f-email"
                            placeholder="E-mail"
                            name="email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            className={!validStatus.email ? 'invalid' : ''}
                        />
                        <button type="button" id="nextBtn" onClick={() => nextPrev(1)}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </p>
                    {!validStatus.email && <span className="invalid-text">Please enter a valid Email ID</span>}
                </div>
                <div className="tab" style={{ display: currentTab === 3 ? 'block' : 'none' }}>
                    <p>
                        <input
                            id="f-phone"
                            placeholder="Phone"
                            name="phone"
                            value={formValues.phone}
                            onChange={handleInputChange}
                            className={!validStatus.phone ? 'invalid' : ''}
                            type="text"
                            maxLength="10"
                        />
                        <button type="button" id="nextBtn" onClick={() => nextPrev(1)}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </p>
                    {!validStatus.phone && <span className="invalid-text">Please enter a valid Phone Number</span>}
                </div>

                <div className="steps">
                    {steps.map((step, index) => (
                        <span key={index} className={`step ${currentTab === index ? 'active' : ''} ${step ? 'finish' : ''}`}></span>
                    ))}
                </div>
            </form>
        </div>
    );
};

export default FooterForm;
