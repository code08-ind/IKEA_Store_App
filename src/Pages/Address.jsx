import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Address = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");

    return (
        <>
            <div className="container login">
                <h2 className='text-center display-6 mb-4'>Address Of Customer</h2>
                <div className="mb-3 w-50">
                    <input type="text" name="name" value={name} className="form-control" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3 w-50">
                    <input type="email" name="email" value={email} className="form-control" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3 w-50">
                    <input type="text" name="contact" value={contact} className="form-control" placeholder="Enter Your Contact Number" onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className="mb-3 w-50">
                    <input type="text" name="address" value={address} className="form-control" placeholder="Enter Your Address" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <Link to="/checkout" className="w-25 btn btn-info">Checkout Order</Link>
            </div>
        </>
    );
}

export default Address;