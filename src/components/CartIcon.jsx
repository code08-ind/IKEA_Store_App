import React from 'react';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
    const cartItems = useSelector(state => state.cartItems);
    let totalQuantity = cartItems.reduce((total, item) => total + item.qty, 0);
    return (
        <div className='cart'>
            <FaShoppingCart className='mx-2 text-warning' height={20} width={20} />
            <p className='text-center fw-bold'>{totalQuantity}</p>
        </div>
    );
}

export default CartIcon;