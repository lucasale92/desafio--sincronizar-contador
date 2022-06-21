import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <header>
      <div className="px-3 py-2 bg-nav text-white App-nav">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <Logo />
            </a>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/" className="nav-link text-black fs-4">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link text-black fs-4">
                  Historia
                </Link>
              </li>
              <li>
                <Link to="/productos" className="nav-link text-black fs-4">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/Contacto" className="nav-link text-black fs-4">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Menu;
