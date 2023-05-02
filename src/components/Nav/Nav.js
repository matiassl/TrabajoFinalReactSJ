import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css"

//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

//Context
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

const Nav = () => {
    const { items } = useContext(ItemsContext);

    let cantidadtotal = 0;
    for (const item of items) {
        cantidadtotal += item.cantidad;
    }

    return (
        <div className="menu pb-2">
            <ul className="list-ul">
                <Link className="Link" to="/">
                    INICIO
                </Link>

                <Link className="Link">
                    NOSOTROS
                </Link>

                <Link className="Link">
                    CONTACTANOS
                </Link>

                <Link className="Link" to="/shoppingcart" >
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span style={{ fontSize: "18x" }}>({cantidadtotal})  </span>
                </Link>

            </ul>
        </div>
    )
}

export default Nav;
