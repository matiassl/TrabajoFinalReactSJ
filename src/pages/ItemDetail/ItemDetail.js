import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./ItemDetail.css";

//Componentes
import Item from "../../components/Item/Item";
import SpinnerBs from "../../components/Spinner/SpinnerBs";

// Firebase 
import { collection, query, getDocs, where, documentId, } from "firebase/firestore";
import { db } from "../../components/firebase/firebaseConfig";

const ItemDetail = () => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    const getItem = async () => {
      const q = query(collection(db, "comidas"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs[0]);
      setIsLoading(false);
    };
    getItem();
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

