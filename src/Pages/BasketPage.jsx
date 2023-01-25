import React from 'react';
import { useState,useEffect } from 'react';
import Header from '../components/Header/Header';
import Basket from '../components/Basket/Basket';
const BasketPage = () => {
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   const query = ref(db, "products");
  //   return onValue(query, (snapshot) => {
  //     const data = snapshot.val();
  //     if (snapshot.exists()) {
  //       Object.values(data).map((project) => {
  //         setProjects((projects) => [...projects, project]);
  //         console.log(projects);
  //       });

  //     }
  //   });
  // }, []);

  return (
    <>
   <Header/>

   <Basket/>
   </>
  )
}

export default BasketPage;