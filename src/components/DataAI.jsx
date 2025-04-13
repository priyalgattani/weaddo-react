import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from 'react-bootstrap';
import GreenButton from './GreenButton';


function DataAI() {
    const [activeTab, setActiveTab] = useState('analyticsContent');

    const handleTabClick = (event, tabId) => {
        event.preventDefault();
        setActiveTab(tabId);
    };
    return (
        <section id="data-ai">
            <div className="container-fluid section">
                <div className="data-ai-h">
                    <h2>
                        We bring Human, Data <br />& AI together
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-5 data-ai-img">
                        <img
                            className="data-ai-gif"
                            src="src\assets\media\spinootale gif.gif"
                            alt="GIF"
                        />
                    </div>
                    <div className="col-lg-6 col-md-7 data-ai-text">
                        <Nav>
                            <NavItem>
                                <NavLink
                                    className={`btn btn-outline-blue data-ai-btn ${activeTab === 'analyticsContent' ? 'active' : ''}`}
                                    id="analytics-tab"
                                    href="#analyticsContent"
                                    role="tab"
                                    aria-controls="analyticsContent"
                                    aria-selected={activeTab === 'analyticsContent'}
                                    onClick={(e) => handleTabClick(e, 'analyticsContent')}
                                >
                                    Analytics
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={`btn btn-outline-blue data-ai-btn ${activeTab === 'collaborationContent' ? 'active' : ''}`}
                                    id="collaboration-tab"
                                    href="#collaborationContent"
                                    role="tab"
                                    aria-controls="collaborationContent"
                                    aria-selected={activeTab === 'collaborationContent'}
                                    onClick={(e) => handleTabClick(e, 'collaborationContent')}
                                >
                                    Collaboration
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <div className="tab-content">
                            <div
                                className={`tab-pane fade ${activeTab === 'analyticsContent' ? 'active show' : ''}`}
                                id="analyticsContent"
                                role="tabpanel"
                                aria-labelledby="analytics-tab"
                            >
                                {/* <!-- <h3>Spinootale</h3> --> */}
                                <img src="src\assets\media\spinootale.png" alt="Spinootale" />
                                <p>
                                    We start by understanding human behavior, prefernces, and
                                    needs to gain valuable insights into customer behavior,
                                    market trends, and performance metrics. And our AI
                                    capabilities enable personalized experiences, predictive
                                    analytics, and automation.
                                </p>
                                <GreenButton text="LEARN MORE" type="button" />
                            </div>
                            <div
                                className={`tab-pane fade ${activeTab === 'collaborationContent' ? 'active show' : ''}`}
                                id="collaborationContent"
                                role="tabpanel"
                                aria-labelledby="collaboration-tab"
                            >
                                {/* <!-- <h3>Brndaddo</h3> --> */}
                                <img
                                    src="https://brndaddo.com/wp-content/themes/brndaddo/img/logo.png"
                                    alt="Brndaddo"
                                />

                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna
                                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                                </p>
                                <GreenButton text="LEARN MORE" type="button" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default DataAI;