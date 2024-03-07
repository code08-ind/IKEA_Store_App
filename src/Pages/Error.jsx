import React from 'react';
import error from '../images/error.svg';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
        <div className="container error mt-4">
            <img src={error} alt="404 Error Page" className='mb-4' height={300} width={900} />
            <Link to="/" className='btn btn-success mt-5'>Go To Home Page</Link>
        </div>
    </>
  );
}

export default Error;