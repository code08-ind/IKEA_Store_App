import React, { useEffect, useState } from 'react';
import { prodServiceObj } from '../services/ProdService';
import { Link } from 'react-router-dom';

const Products = () => {
  let [prods, setProds] = useState([]);

  useEffect(() => {
    const getAllProds = () => {
      prodServiceObj.getAllProducts().then(resData => {
        setProds(resData.data);
      });
    }

    getAllProds();
  }, []);

  return (
    <>
      <div className="container">
        <h1 className='mt-3 display-5'>Products List</h1>
        <hr />

        <div className="row">
          {prods.map((prod, index) => {
            return (
              <>
                <div className="col-md-3 mt-3" key={index}>
                  <div className="card" style={{ width: "16rem" }}>
                    <img src={prod.prodimg} className="card-img-top" alt={prod.prodname} />
                    <div className="card-body">
                      <h5 className="card-title">{prod.prodname}</h5>
                      <p className="card-text">{prod.prodesc}</p>
                      <p className='text-decoration-line-through text-bg-secondary'>${prod.price}</p>
                      <p className="card-text">
                        <span className='text-info'>${prod.price * 0.9}</span>
                        &nbsp; | &nbsp;
                        <span className='text-success fw-semibold'>{prod.category}</span>
                      </p>
                      <Link to={"/products/" + prod.prodid} className="btn btn-primary">Checkout Product</Link>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Products;
