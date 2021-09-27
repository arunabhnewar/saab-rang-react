import React from 'react';
import './Cart.css';

const Cart = (props) => {
    // const { cart } = props;
    // const count = cart.reduce((previous, meal) => previous + meal.quantity, 0);

    // let count = 0;
    // for (const meal in cart) {
    //     count = count + meal.quantity;
    // }

    return (
        <div>
            <h3 className="text-center">Order Summary</h3>
            <ul>
                {
                    props.cart.map(meal => <p>Orderd Item: {meal.strMeal}</p>)
                }
            </ul>
        </div>
    );
};

export default Cart;