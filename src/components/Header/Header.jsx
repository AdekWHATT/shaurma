import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/All/logo.png';
import basket from '../../images/Header/basket.png';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromBasket } from '../../redux/basketSlice';

import './Header.css';

const Header = () => {
  const basketCount = useSelector(state => state.basket.totalQuantity);

  const dispatch = useDispatch();
  const basketItems = useSelector(state => state.basket.items);
  const basketTotalPrice = useSelector(state => state.basket.totalPrice);
  // Удалить товар из корзины
  const handleRemove = itemId => {
    dispatch(removeItemFromBasket(itemId));
  }
  return (
    <div className='container mb-3'>
      <div className='row header-row'>
        <div className='col-sm-2'>
          <NavLink to='/'>
            <img src={logo} alt="Шаурмалай" />
          </NavLink>
        </div>
        <div className='col-sm-7'>
          <ul className='header_navlist'>
            <NavLink to='/menu'>Меню</NavLink>
            <NavLink to='/deals'>Акции</NavLink>
            <NavLink to='/jobs'>Вакансии</NavLink>
            <NavLink to='/contacts'>Контакты</NavLink>
          </ul>
        </div>
        <div className="col-sm-3">
        </div>
      </div>
      <div className='header-basket'>
        <NavLink to='/basket'>
          <img src={basket} alt="Корзина" />
          <span className="basket_count">{basketCount}</span>
        </NavLink>
        <div className="basket-dropdown">
          {basketCount ? (
            // В корзине есть товары тогда выводим их
            basketItems.map(item => (
              <div className='basket-dropdown__item' key={item.id}>
                <span className=''>
                  {item.name} {item.quantity > 1 && <span>- {item.quantity} шт. = </span>}
                </span>
                <span className=''>
                  {item.price * item.quantity} р.
                </span>
                <button className='basket-dropdown__delete-item' onClick={() => handleRemove(item.id)}>X</button>
              </div>
            ))
          )
            : (
              // Корзина пуста - выводим сообщение
              <p>Ваша корзина пуста</p>
            )}
          {basketCount ?
            <div className='basket-dropdown__total-price'>Всего {basketTotalPrice} руб.
              <NavLink to="/basket">Перейти в корзину</NavLink>
            </div>

            : null}
        </div>
      </div>
    </div>
  )
}
export default Header;