import React, { useEffect, useState } from 'react';
import { prodServiceObj } from '../services/ProdService';
import { Link } from 'react-router-dom';

const Admin = ({setIsLoggedIn}) => {
  let [prodid, setProdId] = useState("");
  let [prodname, setProdName] = useState("");
  let [proddesc, setProdDesc] = useState("");
  let [price, setPrice] = useState("");
  let [category, setCategory] = useState("");
  let [prodimg, setProdImg] = useState("");

  let [prods, setProds] = useState([]);

  const getAllProds = () => {
    prodServiceObj.getAllProducts().then(resData => {
      setProds(resData.data);
    });
  }

  useEffect(() => {
    getAllProds();
  }, []);

  const addProduct = () => {
    let addedProd = {
      prodid,
      prodname,
      proddesc,
      price,
      category,
      prodimg
    }
    prodServiceObj.addProduct(addedProd).then(resData => {
      alert("Product Added");
      getAllProds();
      clearInputFields();
    });
  }

  const clearInputFields = () => {
    setProdId("");
    setProdName("");
    setProdDesc("");
    setPrice("");
    setCategory("");
    setProdImg("");
  }

  const deleteProduct = (pno) => {
    let res = window.confirm("Are You Sure You Want To Delete The Product?");
    if (res) {
      prodServiceObj.deleteProduct(pno).then(resData => {
        alert("Product Deleted");
        getAllProds();
      });
    }
  }

  const selectProduct = (pno) => {
    prodServiceObj.getProductById(pno).then(getProd => {
      setProdId(getProd.data.prodid);
      setProdName(getProd.data.prodname);
      setProdDesc(getProd.data.proddesc);
      setPrice(getProd.data.price);
      setCategory(getProd.data.category);
      setProdImg(getProd.data.prodimg);
    });
  }

  const updateProduct = () => {
    let updatedProd = {
      prodid,
      prodname,
      proddesc,
      price,
      category,
      prodimg
    }
    prodServiceObj.updateProduct(updatedProd).then(fetchedDept => {
      getAllProds();
      clearInputFields();
    });
  }

  const handleLogout = ()=>{
    setIsLoggedIn(false);
  }

  return (
    <>
      <div className="container mt-2">
        <div className='admin'>
          <h1 className='display-6'>Admin Panel</h1>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <input type="text" value={prodid} name='prodid' className="form-control" placeholder='Enter Product Id' onChange={(e) => setProdId(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" value={prodname} name='prodname' className="form-control" placeholder='Enter Product Name' onChange={(e) => setProdName(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" value={proddesc} name='proddesc' className="form-control" placeholder='Enter Product Description' onChange={(e) => setProdDesc(e.target.value)} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <input type="number" value={price} name='price' className="form-control" placeholder='Enter Product Price' onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" value={category} name='category' className="form-control" placeholder='Enter Product Category' onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="mb-3">
              <input type="text" value={prodimg} name='prodimg' className="form-control" placeholder='Enter Product Image' onChange={(e) => setProdImg(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="row my-2 justify-content-around">
          <button type="submit" className="btn btn-success my-1 w-25" onClick={addProduct}>Add Product</button>
          <button className='btn btn-danger mx-1 w-25 my-1' onClick={handleLogout}>Logout</button>
          <button type="submit" className="btn btn-warning my-1 w-25" onClick={updateProduct}>Update Product</button>
        </div>
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
                      <p className="card-text">
                        <span>${prod.price}</span>
                        &nbsp; | &nbsp;
                        <span className='text-success fw-semibold'>{prod.category}</span>
                      </p>
                      <div className="row">
                        <Link to="#" className="btn btn-danger w-50" onClick={() => deleteProduct(prod.prodid)}>Delete</Link>
                        <Link to="#" className="btn btn-primary w-50" onClick={() => selectProduct(prod.prodid)}>Select</Link>
                      </div>
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

export default Admin;