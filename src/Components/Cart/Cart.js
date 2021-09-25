import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
        <div>
            <ul>
                {
                    props.cart.map(meal => <p>Orderd Item: {meal.strMeal}</p>)
                }
            </ul>
        </div>
    );
};

export default Cart;