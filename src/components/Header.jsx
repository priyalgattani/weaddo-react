import React from "react";
import CoffeeModal from "./CoffeeModal.jsx";
import NavModal from "./NavModal.jsx";
import "./styles.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-light fixed-top">
            <div className="nav-left">
              <a className="navbar-brand" href="">
                <img
                  className="logo"
                  src="src\assets\media\logo.png"
                  alt="WeAddo"
                />
              </a>
            </div>
            <div className="nav-right">
              <input
                placeholder="Your Industry..."
                type="search"
                name="search"
                id="search"
                className="search-input"
              />
              <CoffeeModal />

              <NavModal />
            </div>
          </nav>
        </div>

        <button
          className="btn btn-dark btn-sm nav-btn btn-connect btn-connect-mobile"
          data-toggle="modal"
          data-target="#coffeeModal"
          type="button"
          name="button"
        >
          <i>Coffee? We'll pay!</i>
        </button>


      </header>
    </>
  );
}
