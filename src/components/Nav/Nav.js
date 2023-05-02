import React from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";
import "./Nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Nav = () =>{
    const {items} = useContext(ItemsContext);
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
            <span style={{fontSize: "18x"}}>({items.length})  </span>
                     
            </Link>
            
        </ul>
        </div>
    )
}

export default Nav;
