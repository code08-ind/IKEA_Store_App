import React, { useEffect, useState } from 'react';
import { prodServiceObj } from '../services/ProdService';
import { Link, useParams } from 'react-router-dom';

const ProductsByCategory = () => {
    let [prods, setProds] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        const getAllProds = () => {
            prodServiceObj.getAllProducts().then(resData => {
                setProds(resData.data);
            });
        }

        getAllProds();
    }, []);

    if (prods.length === 0) {
        return (
            <>
                <div className="container">
                    <h1 className='mt-3'>Products List</h1>
                    <hr />

                    <h6>Sorry!!. No Products Found With This Category!!</h6>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="container">
                    <h1 className='mt-3'><span className='text-warning fw-bold'>{category}</span> Products</h1>
                    <hr />

                    <div className="row">

                        {prods.filter(prod => prod.category === category).map((prod, index) => {
                            return (
                                <>
                                    <div className="col-md-3 mt-3" key={index}>
                                        <div className="card" style={{ width: "16rem" }}>
                                            <img src={prod.prodimg} className="card-img-top" alt={prod.prodname} />
                                            <div className="card-body">
                                                <h5 className="card-title">{prod.prodname}</h5>
                                                <p className="card-text">{prod.prodesc}</p>
                                                <p className="card-text">
                                                    <span>${prod.price}</span>
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
                </div>
            </>
        );
    }
}

export default ProductsByCategory;