import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/actions';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector(state => state.cartItems);
    const totalPrice = useSelector(state => state.totalPrice);
    const dispatch = useDispatch();
    const handleRemoveFromCart = (prodid) => {
        dispatch(removeFromCart(prodid));
    }

    return (
        <>
            <div className="container">
                <h2 className='display-6'>Cart Details</h2>
                <div className="row">
                    {cartItems.map(item => (
                        <div className="col-md-3 mt-3" key={item.prodid}>
                            <div className="card" style={{ width: "16rem" }}>
                                <img src={item.prodimg} className="card-img-top" alt={item.prodname} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.prodname}</h5>
                                    <p className="card-text">{item.prodesc}</p>
                                    <p className="card-text">
                                        <span>${item.price}</span>
                                        &nbsp; | &nbsp;
                                        <span className='text-success fw-semibold'>{item.category}</span>
                                    </p>
                                    <p>Quantity: {item.qty}</p>
                                    <button className='btn btn-danger' onClick={() => handleRemoveFromCart(item.prodid)}>Remove Item</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <h3 className='my-2'>Total Price: ${totalPrice}</h3>
                    <Link to="/address" className="btn btn-info mt-2 mb-5 w-25">Checkout Order</Link>
                </div>
            </div>
        </>
    );
}

export default Cart;