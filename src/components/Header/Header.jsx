import React from 'react';
import { useSelector } from 'react-redux'
import RegisterBtn from '../../components/RegisterBtn/RegisterBtn';
import BasketPage from '../../Pages/BasketPage';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../images/All/logo.png';
import basket from '../../images/Header/basket.png';
import './Header.css';

const Header = () => {
  const myData = useSelector(state => state.cart);
  const navigate =  useNavigate();

  const handleNavClick = path => {
    navigate.push(path);
  }

  return (
    <div className='container mb-3'>
        <div className='row header-row'>
          <div className='col-sm-2'>
            <NavLink to='/'>
            <img src={logo} alt="Шаурмалай" onClick={() => handleNavClick('/')}/>
            </NavLink>
          </div>
          <div className='col-sm-6 offset-1'>
            <ul className='header_navlist'>
              <NavLink to='/menu'>Меню</NavLink>
              <NavLink to='/deals'>Акции</NavLink>
              <NavLink to='/jobs'>Вакансии</NavLink>
              <NavLink to='/contacts'>Контакты</NavLink>
            </ul>
          </div>
          <div className="col-sm-2">
            <RegisterBtn />
          </div>
          <div className='col-sm-1'>
            <div className='header-basket'>
              {/* <img src={basket} alt="Корзина" onClick={() => handleNavClick('/cart')}/> */}
              <NavLink to='/basket'>
              <img src={basket} alt="Корзина" />
              <span className="basket_count">{myData.cartCount}</span>
              </NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header;
