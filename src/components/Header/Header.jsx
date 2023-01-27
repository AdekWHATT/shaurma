import React from 'react';
import { useSelector } from 'react-redux'
import RegisterBtn from '../../components/RegisterBtn/RegisterBtn';
import { NavLink } from 'react-router-dom';
import logo from '../../images/All/logo.png';
import basket from '../../images/Header/basket.png';
// import {auth, logout } from '../Firebase/Firebase';
// import { useDispatch } from 'react-redux';
import './Header.css';
// const handleLogout = (auth) => {
//   logout(auth)
//   console.log(auth)
// }
const Header = (props) => {
  // const dispatch = useDispatch();
  // console.log(props.name)
  // const myData = useSelector(state => state.cart);
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
        <button className="dashboard__btn" >
          Logout
         </button>
          <RegisterBtn name={props.name}/>
        </div>
      </div>
      <div className='header-basket'>
          <NavLink to='/basket'>
            <img src={basket} alt="Корзина" />
            <span className="basket_count">0</span>
          </NavLink>
        </div>
    </div>
  )
}

export default Header;
