import React from "react";
import { Link } from "react-router-dom";
import "./Categorias.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


const Categorias = () => {
    return (
        <>
            <div className="container d-flex justify-content-end">
                <span style={{marginTop: "5px"}}>Filtrar por:</span>
                <div className="dropdown">
                    <button className="dropdown-btn">Categorias<FontAwesomeIcon icon={faChevronDown} className="icono" /></button>
                    <div className="dropdown-content">
                        <Link to="/" className="dropdown-item">Todos</Link>
                        <Link to="/categoria/Carnes" className="dropdown-item">Carnes</Link>
                        <Link to="/categoria/Hamburguesas" className="dropdown-item">Hamburguesas</Link>
                        <Link to="/categoria/Pastas" className="dropdown-item">Pastas</Link>
                        <Link to="/categoria/Pizzas" className="dropdown-item">Pizzas</Link>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Categorias;
