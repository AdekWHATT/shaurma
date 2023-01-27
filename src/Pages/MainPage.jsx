import React from 'react'
import Header from '../components/Header/Header';
import MainSlider from '../components/MainSlider/MainSlider';
import Tizers from '../components/Tizers/Tizers';
import ProductsList from '../components/ProductsList/ProductsList';
import SaleSlider from '../components/SaleSlider/SaleSlider';
import Footer from '../components/Footer/Footer';
const MainPage = () => {
  return (
    <>
      <Header/>
      <MainSlider />
      <Tizers />
      <SaleSlider/>
      <ProductsList />
      <Footer/>
    </>
  )
}
export default MainPage;