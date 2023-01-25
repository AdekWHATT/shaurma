import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import footerLogo from '../../images/Footer/footer-logo.png';
import whatsapp from '../../images/Footer/wa.png';
import telegram from '../../images/Footer/tg.png';
const Footer = () => {
    return (
        <div className='container'>
            <div className='row footer-row'>
                <div className='col-sm-2'>
                    <NavLink to='/'>
                        <img src={footerLogo} alt="Логотип" />
                    </NavLink>
                </div>
                <div className='col-sm-8'>
                    <ul className='footer-list'>
                        <li><NavLink to="">Доставка и Оплата</NavLink></li>
                        <li><a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Политика конфиденциальности</a></li>
                        <li><NavLink to="">Адреса</NavLink></li>
                    </ul>
                </div>
                <div className='col-sm-2 footer-social_container'>
                    <div className='footer-social-links'>
                        <a href="#!"><img src={telegram} alt="Телеграм" /></a>
                        <a href="#!"><img src={whatsapp} alt="Ватсапп" /></a>
                    </div>
                </div>
            </div>
            {/* {Модальное окно политики конфиденциальности} */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Политика конфиденциальности</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Политика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальностиПолитика конфиденциальности
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;