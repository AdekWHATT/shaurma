import React from 'react'
import './RegisterBtn.css';
import { NavLink } from 'react-router-dom';
const RegisterBtn = (props) => {
  const userName = props.name;
  return (
    <NavLink to='/register' className='register_btn'>
      {userName ? userName : 'Аккаунт'}
    </NavLink>
  )
}

export default RegisterBtn;