import React from 'react'
import './RegisterBtn.css';
import { NavLink } from 'react-router-dom';
const RegisterBtn = () => {
  return (
   <NavLink to='/register' className='register_btn'>
    Регистрация 
   </NavLink>
  )
}

export default RegisterBtn