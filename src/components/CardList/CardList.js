import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CardList.css"

//Componentes 
import CardItem from "../CardItem/CardItem";
import SpinnerBs from "../Spinner/SpinnerBs";
import Categorias from "../Categorias/Categorias";

// Firebase
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const CardList = () => {
  const [Items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "comidas"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setItems(docs);
    };
    getItems();
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
                    <Link to={`/item/${item.id}`} className="caja">
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