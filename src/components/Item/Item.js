import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import "./Item.css";

//Toastify
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Context
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

const Item = ({ data }) => {
  const { items, setItems } = useContext(ItemsContext);

  const [cantidad, setcantidad] = useState(0);
  console.log(data);
  const incrementarcantidad = () => {
    setcantidad(cantidad + 1);
  };

  const decrementarcantidad = () => {
    if (cantidad > 0) {
      setcantidad(cantidad - 1);
    }
  };
  useEffect(() => {
    console.log(items);
  }, [items]);

  const handleClick = (data, cantidad) => {

    const producto = { ...data, cantidad };
    console.log(producto)
    const indexCarrito = items.findIndex(prod => prod.id === producto.id);
    if (indexCarrito === -1) {
      setItems(items.concat(producto));
    }
    else {
      const actualizarCantidad = items.map((prod) =>
        prod.id === producto.id ? { ...prod, cantidad: prod.cantidad + cantidad } : prod
      );
      setItems(actualizarCantidad);     
     
      
    }
    toast.success('Producto agregado al carrito', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }


  return (
    <div>
      <div className="titulo-pagina py-2">
        <h3>{data.Titulo}</h3>
      </div>
      <ToastContainer />
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6">
            <img src={data.Imagen} className="img-fluid imagen" alt="Imagen del producto" />
          </div>
          <div className="col-sm-6 text-left">
            <h2 className="title">{data.Titulo}</h2>
            <p className="description">{data.Descripcion}</p>
            <p>{data.Categoria}</p>
            <h4>Precio: {data.Precio}</h4>
            <p>Stock: {data.Stock}</p>
            <div>
              <p>Cantidad: <button className="btn btn-primary" onClick={decrementarcantidad} disabled={cantidad === 0}>-</button> {cantidad} <button className="btn btn-primary" onClick={incrementarcantidad} disabled={cantidad >= data.Stock}>+</button></p>
              <Button variant="success" onClick={() => handleClick(data, cantidad)} disabled={cantidad === 0}>Comprar</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
