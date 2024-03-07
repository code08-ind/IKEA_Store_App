import React, { useEffect, useState } from 'react';
import { IoAdd, IoRemoveOutline } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import { prodServiceObj } from '../services/ProdService';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/actions';

const Product = () => {
    let [qty, setQty] = useState(0);
    const { prodid } = useParams();
    const navigate = useNavigate();

    let [prodname, setProdName] = useState("");
    let [proddesc, setProdDesc] = useState("");
    let [price, setPrice] = useState("");
    let [category, setCategory] = useState("");
    let [prodimg, setProdImg] = useState("");

    const dispatch = useDispatch();

    const getProduct = (pno) => {
        prodServiceObj.getProductById(pno).then(getProd => {
            setProdName(getProd.data.prodname);
            setProdDesc(getProd.data.proddesc);
            setPrice(getProd.data.price);
            setCategory(getProd.data.category);
            setProdImg(getProd.data.prodimg);
        });
    }

    useEffect(() => {
        getProduct(prodid);
    }, [prodid]);

    const addProduct = () => {
        setQty(qty + 1);
    }

    const removeProduct = () => {
        if (qty > 0) {
            setQty(qty - 1);
        }
        else {
            setQty(0);
        }
    }

    const handleAddToCart = () => {
        dispatch(addToCart(
            {
                prodid,
                prodname,
                proddesc,
                price,
                category,
                prodimg,
                qty
            }
        ));

        setTimeout(() => {
            navigate("/cart");
        }, 2000);
    }

    return (
        <div className='container'>
            <div className="row mt-5">
                <div className="col-md-6">
                    <img src={prodimg} alt="Table" height={400} width={300} />
                </div>
                <div className="col-md-6">
                    <h4 className='display-5'>{prodname}</h4>
                    <p className='text-secondary'>{proddesc}</p>
                    <p>
                        <span className='text-info'>${price}</span>
                        &nbsp;|&nbsp;
                        <span className='text-success'>{category}</span>
                    </p>
                    <p>
                        <IoAdd className='icond' onClick={addProduct} />
                        {qty}
                        <IoRemoveOutline className='icond' onClick={removeProduct} />
                    </p>
                    <button className='btn btn-primary' onClick={handleAddToCart}>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default Product;