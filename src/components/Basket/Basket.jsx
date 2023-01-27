import React from 'react';
import './Basket.css';
import BasketSale from '../../mobx/basket';
import { toJS } from 'mobx';
const Basket = () => {
  const basketItems = new BasketSale();
  const basketAll = toJS(basketItems);
  console.log(basketAll)
  return (
    <div className='container'>
      <div className='row'>
      <h2 className='text-center'>Корзина</h2>
        <div className='col-6'>
<div className='basket-items_container'>
{basketAll.basket.length === 0 ? <span className='fs-3 text-center'>Корзина Пуста, <br/>перейдите к каталогу на главной</span> : basketAll.basket.map(item => (
          <div className='basket-item' key={item.id}>
            <div>
            <img className='basket-item__img' src={item.img}/>
              </div>
            <span className='basket-item__title'>
            {item.name}
            </span>
            <span className='basket-item__price'>
            {item.price} р.
            </span>
            <button className='removeBasket_btn'>Удалить</button>
          </div>
          
        ))}
</div>
        </div>
        <div className='col-6'>
          <div className='basket-offer_container'>
            <span>Общая сумма: {}</span>
            {/* <button onClick={() => handleAdd} className='register_btn'>Оформить заказ</button>
            <button className='register_btn' onClick={handleClear}>Очистить корзину</button> */}
          </div>
          </div>
      </div>
      
      <ul>
      {basketItems.basket.map(item => (
          <li key={item.id}>
            <p>
              Товар: 
            {item.name}
            </p>
           {item.price}
            <button className='removeBasket_btn'>Удалить</button>
          </li>
        ))}
      </ul>
     
    </div>
  )
}

export default Basket;
