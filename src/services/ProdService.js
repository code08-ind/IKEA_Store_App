import axios from "axios";

export let prodServiceObj = {
    getAllProducts,
    getProductById,
    deleteProduct,
    updateProduct,
    addProduct
}

let url = "http://localhost:3500/products/";

function getAllProducts() {
    return axios.get(url);
}

function getProductById(pno) {
    return axios.get(url + pno);
}

function deleteProduct(pno) {
    return axios.delete(url + pno);
}

function addProduct(prod) {
    return axios.post(url, prod);
}

function updateProduct(prod) {
    return axios.put(url + prod.prodid, prod);
}

