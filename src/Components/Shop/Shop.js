import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Shop.css';

const Shop = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    const [showMeals, setShowMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setShowMeals(data.meals);
            })
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    const handleSearch = e => {
        const searchText = e.target.value;
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText ? `${searchText}` : `a`}`)
            .then(res => res.json())
            .then(data => setShowMeals(data.meals))
    }
    return (
        <div>

            <div className="search-container">
                <input onChange={handleSearch} type="text" placeholder="Search food...." />
            </div>

            <div className="shop-container">
                <div className="food-container">
                    {
                        showMeals.map(meal => <Meal
                            meal={meal}
                            key={meal.idMeal}
                            handleAddToCart={handleAddToCart}
                        ></Meal>)
                    }
                </div>

                <div className="cart-container">
                    <h3 className="text-center">Order Summary</h3>
                    <Cart cart={cart}></Cart>
                </div>
            </div>

        </div>
    );
};

export default Shop;