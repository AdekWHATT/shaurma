import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import RegisterBtn from '../../components/RegisterBtn/RegisterBtn';
import './Header.css';
import logo from '../../images/All/logo.png';
import basket from '../../images/Header/basket.png';
import { Link } from 'react-router-dom';
const Header = () => {
  const myData = useSelector(state => state.cart);
  return (
    <>
      <div className='container'>
        <div className='row header-row'>
          <div className='col-sm-2 text-center'>
            <a href='#!' className='logo'>
              <img src={logo} alt="Шаурмалай" />
            </a>
            <span>
              Ежедневно с 11:00 до 23:00
            </span>
          </div>
          <div className='col-sm-6 offset-1'>
            <ul className='header_navlist'>
              <li><Link to=''>Меню</Link></li>
              <li><Link to=''>Акции</Link></li>
              <li><Link to=''>Вакансии</Link></li>
              <li><Link to=''>Контакты</Link></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <RegisterBtn />
          </div>
          <div className='col-sm-1'>
            <div className='header-basket'>
              <a href="#!">
                <img src={basket} alt="Корзина" />
              </a>
              <span className="basket_count">{myData.cartCount}</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Header;