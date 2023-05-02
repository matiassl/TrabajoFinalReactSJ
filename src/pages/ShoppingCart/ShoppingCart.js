import React from "react";
// import axios from "axios";
// import SpinnerBs from "../../components/Spinner/SpinnerBs";
import "./ShoppingCart.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";
const ShoppingCart = () => {
    const { items, setItems} = useContext(ItemsContext);

    const handleClick = (key) =>{
        const newItems = items.filter((item) => item.id !== key);
        setItems(newItems);
    }

    return (
<>
    <div className="container paso2" id="paso2">
        {items.length === 0 ? (
            <h1>No hay productos seleccionados</h1>
        ) : (
            <div>
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
                            <td>{prod.title}</td>
                            <td>{prod.cantidad}</td>
                            <td>{prod.price}</td>
                            <td>{prod.price * prod.cantidad}</td>
                            <td>
                                <Button variant="danger mx-1" onClick={() => handleClick(prod.id)}>Cancelar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="container text-end" id="paso3">
                <div className="totalfinal"></div>
                <br />
                <Button variant="danger mx-1">Cancelar</Button>
                <Button variant="success mx-1">Comprar</Button>
            </div>
            </div>
        )}
    </div>
</>


    )
}

export default ShoppingCart;