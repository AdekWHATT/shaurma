import React from 'react'
import './Tizers.css';
import time from '../../images/Tizers/time.svg';
import price from '../../images/Tizers/price.svg';
import rocket from '../../images/Tizers/rocket.svg';
const Tizers = () => {
    return (
        <div className='container mb-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='tizers-container'>
                        <div className='tizer-item'>
                            <img src={time} alt="Время доставки" />
                            <div className='tizer-item__description'>
                                <span className='item__description-title'>до 60 мин.</span>
                                <span className='item__description-desc'>ВРЕМЯ ДОСТАВКИ</span>
                            </div>
                        </div>

                        <div className='tizer-item'>
                            <img src={price} alt="Время доставки" />
                            <div className='tizer-item__description'>
                                <span className='item__description-title'>200Р</span>
                                <span className='item__description-desc'>МИН. СУММА ЗАКАЗА</span>
                            </div>
                        </div>

                        <div className='tizer-item'>
                            <img src={rocket} alt="Время доставки" />
                            <div className='tizer-item__description'>
                                <span className='item__description-title'>от 500 р. </span>
                                <span className='item__description-desc'>БЕСПЛАТНАЯ ДОСТАВКА</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tizers;