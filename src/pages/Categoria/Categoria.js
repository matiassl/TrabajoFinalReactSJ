import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "../../components/CardItem/CardItem";
import "./Categoria.css"
import { Link, useParams } from "react-router-dom";
import SpinnerBs from "../../components/Spinner/SpinnerBs";
import Categorias from "../../components/Categorias/Categorias";

const  capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Categoria = () => {
  const [Items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {cat} = useParams();


  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${cat}`)
      .then((res) => { setItem(res.data) });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [cat]);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <SpinnerBs />
        </div>
      ) : (
        <div>

        <div className="titulo-pagina py-2">
                <h2>Nuestros Productos</h2>
              </div>
        <div className="container">
              
          <div className="row titulo-productos">
            <div className="d-flex justify-content-between mt-3">
              <div className=""  style={{marginTop: "7px"}}>
                Todos / {capitalize(cat)}
              </div>
              <div className="">
              <Categorias />
              </div>
              
            </div>
            <hr/>
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
        </div>
        </div>
      )}
    </>
  );

};
export default Categoria;