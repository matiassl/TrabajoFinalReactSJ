import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../CardItem/CardItem";
import "./CardList.css"
import { Link } from "react-router-dom";
import SpinnerBs from "../Spinner/SpinnerBs";
import Categorias from "../Categorias/Categorias";
// import Dropdown from 'react-bootstrap/Dropdown';

const CardList = () => {
  const [Items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => { setItem(res.data) });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (

    <div>

      <div className="titulo-pagina py-2">
        <h2>Nuestros Productos</h2>
      </div>

      {isLoading ? (
        <div className="Spinner">
          <SpinnerBs />
        </div>
      ) : (
        <div className="container">

          <div className="row titulo-productos">
            <div className="d-flex justify-content-between mt-3">
              <div className="" style={{ marginTop: "7px" }}>
                Productos /
              </div>
              <div className="">
                <Categorias />
              </div>

            </div>
            <hr />
            <div className="productos"><b>{Items.length}</b>- Productos</div>

          </div>

          <div className="Cards-List container">
            {
              Items.map((item) => {
                return (
                  <div key={item.id}>
                    <Link to={`/item/${item.id}`}>
                      <CardItem data={item} />
                    </Link>
                  </div>
                )
              })
            }
          </div>
        </div>)}

    </div>


  );

};

export default CardList;