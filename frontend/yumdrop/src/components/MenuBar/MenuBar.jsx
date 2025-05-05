import React, { useContext, useState } from "react";
import "./MenuBar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";

const MenuBar = () => {
  const [active, setActive] = useState("home");
  const { quantities } = useContext(StoreContext);
  const cartItems = Object.values(quantities).filter((qty) => qty > 0).length;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <img
            src={assets.YumDrop}
            alt="YumDrop"
            className="mx-4"
            height={48}
            width={48}
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  active === "home" ? "nav-link fw-bold active" : "nav-link"
                }
                to="/"
                onClick={() => setActive("home")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  active === "explore" ? "nav-link fw-bold active" : "nav-link"
                }
                to="/explore"
                onClick={() => setActive("explore")}
              >
                Explore
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  active === "contact" ? "nav-link fw-bold active" : "nav-link"
                }
                to="/contact"
                onClick={() => setActive("contact")}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center gap-4">
            <Link to={`/cart`}>
              <div className="position-relative">
                <img
                  src={assets.cart}
                  alt="cart"
                  height={32}
                  width={32}
                  className="position-relative"
                />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                  {cartItems}
                </span>
              </div>
            </Link>
            <button className="btn btn-outline-primary">Login</button>
            <button className="btn btn-outline-success">Register</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;
