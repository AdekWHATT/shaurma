import React from 'react'
import Header from '../components/Header/Header';
import MainSlider from '../components/MainSlider/MainSlider';
import Tizers from '../components/Tizers/Tizers';
import ProductsList from '../components/ProductsList/ProductsList';
import SaleSlider from '../components/SaleSlider/SaleSlider';
import Footer from '../components/Footer/Footer';
import classic from '../images/Products/shavuha.png';
import bald from '../images/Products/bald.png';
const products = [
  {
    id: 1, 
    name: 'Классика',
    category: 'shaurma',
    structure: 'Свежие огурцы, помидоры, курочка, капуста, фирменный соус',
    price: 180,
    volume: '1 шт',
    img: classic,
  },
  {
    id: 2, 
    name: 'Балдежная',
    category: 'shaurma',
    structure: 'Копчёный сыр, свежие огурцы, помидоры, курочка, капуста, фирменный соус',
    price: 190,
    volume: '1 шт',
    img: bald,
  },
  {
    id: 3, 
    name: 'Лукас',
    category: 'shaurma',
    structure: 'Маринованные огурцы, маринованный лук, свежие помидоры, курочка, капуста, фирменный соус',
    price: 200,
    volume: '1 шт',
    img: bald,
  },
  {
    id: 5, 
    name: 'Сырная',
    category: 'shaurma',
    structure: 'Сырный лаваш, сырный соус, огурцы, свежие помидоры, курочка, капуста, фирменный соус',
    price: 200,
    volume: '1 шт',
    img: bald,
  },
  {
    id: 6, 
    name: 'Острая',
    category: 'shaurma',
    structure: 'Перчик халапеньо, огурцы, свежие помидоры, курочка, капуста, фирменный соус',
    price: 200,
    volume: '1 шт',
    img: bald,
  },
  {
    id: 7, 
    name: 'Фрик',
    category: 'shaurma',
    structure: 'Картоха по-деревенски, огурцы, свежие помидоры, курочка, капуста, фирменный соус',
    price: 200,
    volume: '1 шт',
    img: classic,
  },
  {
    id: 8, 
    name: 'Эрик',
    category: 'shaurma',
    structure: 'Сладкий картофель батат, огурцы, свежие помидоры, курочка, капуста, фирменный соус',
    price: 200,
    volume: '1 шт',
    img: bald,
  },
  {
    id: 9, 
    name: 'Грибная',
    category: 'shaurma',
    structure: 'Жареные грибочки, огурцы, свежие помидоры, курочка, капуста, фирменный соус',
    price: 200,
    volume: '1 шт',
    img: classic,
  },
  {
    id: 10, 
    name: 'Абзы',
    category: 'shaurma',
    structure: 'Пельмешки фри, огурцы, свежие помидоры, курочка, капуста, фирменный соус',
    price: 200,
    volume: '1 шт',
    img: bald,
  },
  {
    id: 11, 
    name: 'Деревня',
    category: 'shaurma',
    structure: 'Картоха по-деревенски, маринованные огурцы, маринованный лук, свежие помидоры, курочка, капуста, фирменный соус',
    price: 200,
    volume: '1 шт',
    img: '',
  },
  {
    id: 12, 
    name: 'Терияки',
    category: 'shaurma',
    structure: 'Огурцы, свежие помидоры, курочка, капуста, соус терияки, фирменный соус',
    price: 200,
    volume: '1 шт',
    img: '',
  },
  {
    id: 13, 
    name: 'Красотка',
    category: 'shaurma',
    structure: 'Сырный лаваш, копчёный сыр, огурцы, свежие помидоры, курочка, капуста, соус терияки, фирменный соус',
    price: 200,
    volume: '1 шт',
    img: '',
  },
  {
    id: 14, 
    name: 'Сырные палочки',
    category: 'vprikusku',
    structure: '',
    price: 200,
    volume: '6 шт',
    img: '',
  },
  {
    id: 15, 
    name: 'Наггетсы',
    category: 'vprikusku',
    structure: '',
    price: 170,
    volume: '8 шт',
    img: '',
  },
  {
    id: 16, 
    name: 'Картошка фри',
    category: 'vprikusku',
    structure: '',
    price: 170,
    volume: '140 гр.',
    img: '',
  },
  {
    id: 17, 
    name: 'Хруст',
    category: 'vprikusku',
    structure: '',
    price: 80,
    volume: 'уп.',
    img: '',
  },
  {
    id: 18, 
    name: 'Батат',
    category: 'vprikusku',
    structure: '',
    price: 150,
    volume: '140 гр.',
    img: '',
  },
  {
    id: 19, 
    name: 'Пельмешки фри',
    category: 'vprikusku',
    structure: '',
    price: 0,
    volume: '15 шт.',
    img: '',
  },
  {
    id: 20, 
    name: 'По-деревенски',
    category: 'vprikusku',
    structure: '',
    price: 0,
    volume: '140 гр.',
    img: '',
  },
  {
    id: 21, 
    name: 'Соус порционный',
    category: 'souse',
    structure: '',
    price: 0,
    volume: '1 шт.',
    img: '',
  },
];

const MainPage = (props) => {
  return (
    <>
      <Header name={props.name}/>
      <MainSlider />
      <Tizers />
      <SaleSlider/>
      <ProductsList products={products} />
      <Footer/>
    </>
  )
}
export default MainPage;