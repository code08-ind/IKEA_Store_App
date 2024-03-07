import React from 'react';
import { Link } from 'react-router-dom';

const Checkout = () => {
  return (
    <>
      <div className="container mt-5">
        <h1 className='text-success display-6 fw-bold my-4'>Checkout Process Completed!!!</h1>
        <h6>Thanks For Shopping. Do Visit Again!!!</h6>
        <Link to="/" className='btn btn-success my-4'>Go To Home Page</Link>
      </div>
    </>
  );
}

export default Checkout;