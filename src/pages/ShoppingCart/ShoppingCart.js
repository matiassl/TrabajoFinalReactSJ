import React from "react";
import { Button } from "react-bootstrap";

import "./ShoppingCart.css";

//Context
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

//Iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
const ShoppingCart = () => {
    const { items, setItems } = useContext(ItemsContext);

    const handleClick = (key) => {
        const newItems = items.filter((item) => item.id !== key);
        setItems(newItems);
    }

    let total = 0;
    for (const item of items) {
        total += item.Precio * item.cantidad;
    }

    return (
        <>
            <div className="titulo-pagina py-2">
                <h3>Carrito </h3>
            </div>
            <div className="container box">
                {items.length === 0 ? (
                    <div className="titulo mt-3">
                        <h3>No hay productos seleccionados</h3>
                    </div>

                ) : (
                    <div>
                        <div className="titulo mt-3">
                            <h3> Mis Articulos</h3>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Precio Unitario</th>
                                    <th scope="col">Importe</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody className="tabla">
                                {items.map((prod) => (
                                    <tr key={prod.id}>
                                        <td>{prod.Titulo}</td>
                                        <td>{prod.cantidad}</td>
                                        <td>{prod.Precio}</td>
                                        <td>{prod.Precio * prod.cantidad}</td>
                                        <td>
                                            <Button variant="danger mx-1 btn-sm" onClick={() => handleClick(prod.id)}><FontAwesomeIcon icon={faTrashAlt} /></Button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td></td><td></td><td><b>Precio total:</b></td><td>{total}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="container text-end" id="paso3">
                            <div className="totalfinal"></div>
                            <br />
                            <Link to="/">
                                <Button variant="secondary mx-1">Seguir comprando</Button>
                            </Link>
                            <Link to="/compra">
                                <Button variant="success mx-1">Comprar</Button>
                            </Link>

                        </div>
                    </div>
                )}
            </div>
        </>


    )
}

export default ShoppingCart;