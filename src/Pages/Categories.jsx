import React from 'react';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className='display-6 my-4'>Categories Of Products</h1>
        <div className="row">
          <div className="col-md-6 my-2">
            <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1683121252029-6942e2cd9bc2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top w-100" alt="Storage Product" />
              <div className="card-body">
                <h5 className="card-title">Storage</h5>
                <p>This Includes The Products With Storage Category.</p>
                <Link to="/productsByCategory/Storage" className="btn btn-primary">Explore</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top w-100" alt="Home Decor" />
              <div className="card-body">
                <h5 className="card-title">Home Decor</h5>
                <p>This Includes The Products With Home Decor Category.</p>
                <Link to="/productsByCategory/Decor" className="btn btn-primary">Explore</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="card">
            <img src="https://plus.unsplash.com/premium_photo-1678402545077-7a9ec2b5e5b8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top w-100" alt="Furniture" />
              <div className="card-body">
                <h5 className="card-title">Furniture</h5>
                <p>This Includes The Products With Furniture Category.</p>
                <Link to="/productsByCategory/Furniture" className="btn btn-primary">Explore</Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 my-2">
            <div className="card">
            <img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top w-100" alt="Lighting" />
              <div className="card-body">
                <h5 className="card-title">Lighting</h5>
                <p>This Includes The Products With Lighting Category.</p>
                <Link to="/productsByCategory/Lighting" className="btn btn-primary">Explore</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;