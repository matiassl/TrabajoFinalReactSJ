import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Categoria.css"

//Componentes
import SpinnerBs from "../../components/Spinner/SpinnerBs";
import Categorias from "../../components/Categorias/Categorias";
import CardItem from "../../components/CardItem/CardItem";

// Firebase
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../components/firebase/firebaseConfig";

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Categoria = () => {
  const [Items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { cat } = useParams();

  useEffect(() => {
    const getItems = async () => {
      const q = query(collection(db, "comidas"), where("Categoria", "==", cat));
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
  }, [cat]);

  return (
    <>
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
                  Todos / {capitalize(cat)}
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
          </div>
        )}

      </div>

    </>
  );

};
export default Categoria;