import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Item from "../../components/Item/Item";
import SpinnerBs from "../../components/Spinner/SpinnerBs";

import "./ItemDetail.css";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(
    () => {
      axios.get(`https://fakestoreapi.com/products/${id}`)
        .then((res) => { setItem(res.data) })
        .finally(
          setTimeout(() => {
            setIsLoading(false);
          }, 1000));
    }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <SpinnerBs />
        </div>
      ) : (
        <div
        >
        
          <Item data={item} /> 
       
        </div>
      )}
     
    </>
  )

}

export default ItemDetail;

