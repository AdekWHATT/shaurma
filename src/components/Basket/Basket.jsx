import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket, clearBasket } from '../../redux/cartActions';
import './Basket.css';

const Basket = () => {
  // use useSelector hook to access the global state
  const basketItems = useSelector(state => state.cart.cartItems);
  const allPrice = useSelector(state => state.cart.cartItems);
  allPrice.map(i => (
    console.log(i)
  ))
  const dispatch = useDispatch();
  // handle adding an item to the basket
  const handleAdd = itemId => {
    dispatch(addToBasket(itemId));
  }

  // handle removing an item from the basket
  const handleRemove = itemId => {
    dispatch(removeFromBasket(itemId));
  }

  // handle clearing the entire basket
  const handleClear = () => {
    dispatch(clearBasket());
  }


  return (
    <div className='container'>
      <div className='row'>
      <h2 className='text-center'>Корзина</h2>
        <div className='col-6'>
<div className='basket-items_container'>
{basketItems.length === 0 ? <span className='fs-3 text-center'>Корзина Пуста, <br/>перейдите к каталогу на главной</span> : basketItems.map(item => (
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
            <button className='removeBasket_btn' onClick={() => handleRemove(item.id)}>Удалить</button>
          </div>
          
        ))}
</div>
        </div>
        <div className='col-6'>
          <div className='basket-offer_container'>
            <span>Общая сумма: {}</span>
            <button onClick={() => handleAdd} className='register_btn'>Оформить заказ</button>
            <button className='register_btn' onClick={handleClear}>Очистить корзину</button>
          </div>
          </div>
      </div>
      
      {/* <ul>
      {basketItems.map(item => (
          <li key={item.id}>
            <p>
              Товар: 
            {item.name}
            </p>
           {item.price}
            <button className='removeBasket_btn' onClick={() => handleRemove(item.id)}>Удалить</button>
          </li>
        ))}
      </ul> */}
     
    </div>
  )
}

export default Basket;
