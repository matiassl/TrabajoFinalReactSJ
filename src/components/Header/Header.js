import React from "react";
import img from "../../assets/logo.png"

import "./Header.css";

//Componente
import Nav from "../Nav/Nav";

const Header = () => {
    return (

        <div className="header">
            <div className="titulo py-3">
                <img src={img} className="img-fluid imagen" alt="Logo" />
            </div>

            <Nav className="menu py-2" />
        </div>

    )
}

export default Header; 