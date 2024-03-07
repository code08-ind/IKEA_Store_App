import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from './CartIcon';

const Navbar = ({ isLoggedIn }) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light border-2 border-black" style={{ borderBottom: "1px solid grey" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/"><img src="https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-makeup-furniture-electronic/furniture-106.png" height={30} width={30} alt="IKEA Shop" /> IKEA Shop</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/login">Login</Link>
                            </li>
                            {isLoggedIn && <li className="nav-item">
                                <Link className="nav-link active" to="/admin">Admin</Link>
                            </li>}
                            <li className="nav-item">
                                <Link className="nav-link active" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/cart">Cart</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                   <CartIcon/>
                                </li>
                            </ul>
                            <input className="form-control me-2" type="search" placeholder="Search Product @ IKEA" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;