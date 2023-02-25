import React from 'react';
import './ProductsList.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/productSlice';
import { addItemToBasket } from '../../redux/basketSlice';

const ProductsList = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  // Выбор категории продуктов
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(
      category === 'all' ? products : products.filter(product => product.category === category)
    );
  };
  // Добавление товара в корзину
  const handleAddToBasket = (product) => {
    dispatch(addItemToBasket(product));
  };
  return (
    <div className='container mb-5'>
      <div className='row mb-5'>
        <div className='col-12'>
          <div className='item-button-container'>
            <input
              type="button"
              className={`products-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              value="Все товары"
              onClick={() => handleCategorySelect('all')}
            />
            <input
              type="button"
              className={`products-btn ${selectedCategory === 'shaurma' ? 'active' : ''}`}
              value="Шаурма"
              onClick={() => handleCategorySelect('shaurma')}
            />
            <input
              type="button"
              className={`products-btn ${selectedCategory === 'vprikusku' ? 'active' : ''}`}
              value="Вприкуску"
              onClick={() => handleCategorySelect('vprikusku')}
            />
            <input
              type="button"
              className={`products-btn ${selectedCategory === 'souse' ? 'active' : ''}`}
              value="Соусы"
              onClick={() => handleCategorySelect('souse')}
            />
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <div className='products-items-container'>
            {filteredProducts.map(product => (
              <div className='products-item' key={product.id}>
                <div className='products-item__image'>
                  <img src={product.img} />
                </div>
                <div className='products-item__title'>
                  <span className='products-item__title-text'>{product.name}</span>
                </div>
                <div className='products-item__structure'>
                  <span className='products-item__structure-text'>
                    {product.structure}
                  </span>
                </div>
                <div className='products-item__add-prod'>
                  <div className='products-item__add-volume'>{product.volume}</div>
                  <div className='products-item__add-price'>{product.price} &#8381;</div>
                  <button className='products-item__add-button' onClick={() => handleAddToBasket(product)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsList;