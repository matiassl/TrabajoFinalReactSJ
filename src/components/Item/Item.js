import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./Item.css";
import { useContext } from "react";
import { ItemsContext } from "../../contexts/ItemsContext";

const Item = ({ data }) => {
  const { items, setItems } = useContext(ItemsContext);

  const [cantidad, setcantidad] = useState(0);
  // console.log(items);
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
    //  alert('producto agregado');


  }


  return (
    <div>
      <div className="titulo-pagina py-2">
        <h3>{data.title}</h3>
      </div>

      <div className="container mt-5">
        <div className="row">
          {/* <h1>User Detail</h1> */}
          <div className="col-sm-6">
            <img src={data.image} className="img-fluid imagen" alt="Imagen del producto" />
          </div>
          <div className="col-sm-6 text-left">
            <h2 className="title">{data.title}</h2>
            <p className="description">{data.description}</p>
            <p>{data.category}</p>
            <h4>Precio: {data.price}</h4>
            <p>Stock: 5</p>
            <div>
              <p>Cantidad: <button className="btn btn-primary" onClick={decrementarcantidad} disabled={cantidad === 0}>-</button> {cantidad} <button className="btn btn-primary" onClick={incrementarcantidad} disabled={cantidad > 4}>+</button></p>
              <Button variant="success" onClick={() => handleClick(data, cantidad)} disabled={cantidad === 0}>Comprar</Button>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
