import { React } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Basket.css';
import { removeItemFromBasket, clearBasket } from '../../redux/basketSlice';

const Basket = () => {
    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basket.items);
    const basketTotalPrice = useSelector(state => state.basket.totalPrice);
    // Удалить товар из корзины
    const handleRemove = itemId => {
        dispatch(removeItemFromBasket(itemId));
    }
    //Очистка корзины
    const handleClearBasket = () => {
        dispatch(clearBasket());
    }
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='text-center'>Корзина</h2>
                <div className='col-6'>
                    <div className='basket-items_container'>
                        {basketItems.length === 0 ? <span className='fs-3 text-center'>Корзина Пуста,
                            <br />перейдите к <NavLink to='/'>каталогу на главной</NavLink></span>
                            : basketItems.map(item => (
                                <div className='basket-item' key={item.id}>
                                    <div>
                                        <img className='basket-item__img' src={item.img} />
                                    </div>
                                    <span className='basket-item__title'>
                                        {item.name} {item.quantity > 1 && <span>- {item.quantity} шт. на сумму = </span>}
                                    </span>
                                    <span className='basket-item__price'>
                                        {item.price * item.quantity} р.
                                    </span>
                                    <button className='removeBasket_btn' onClick={() => handleRemove(item.id)}>Удалить</button>
                                </div>
                            ))}
                    </div>
                </div>
                <div className='col-6'>
                    <div className='basket-offer_container'>
                        <span>Общая сумма: {basketTotalPrice} руб</span>
                        <button className='register_btn'>Оформить заказ</button>
                        <button className='register_btn' onClick={() => handleClearBasket()}>Очистить корзину</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Basket;
