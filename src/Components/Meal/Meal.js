import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const { idMeal, strMealThumb, strMeal, strCategory, strArea, strYoutube } = props.meal;
    const { handleAddToCart, meal } = props;
    return (
        <div className='meal-card'>
            <div className="item-card" style={{ width: "14rem;" }}>
                <img src={strMealThumb} className="card-img-top img-fluid" alt="..." />
                <div className="card-details">
                    <h4 className="card-title mt-3">{strMeal}</h4>
                    <h6>Category: {strCategory}</h6>
                    <h6>Origin: {strArea}</h6>
                    <h6 className="card-text">Id: {idMeal}</h6>
                    <button className="youtube-btn"><a href={strYoutube}>Watch</a></button>
                    <button
                        onClick={() => { handleAddToCart(meal) }}
                        className="cart-btn">
                        <FontAwesomeIcon icon={faShoppingCart} /> Add Cart</button>
                </div>
            </div>
        </div >
    );
};

export default Meal;

