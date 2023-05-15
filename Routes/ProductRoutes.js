


const express = require('express');
const ProductController = require('../Controllers/ProductController');
const { productStoreRequest } = require('../Requests/ProductStoreRequest');
   
const router = express.Router();



router.post('/', ProductController.storeProduct(productStoreRequest) ,ProductController.storeProduct);

router.route("/").get(ProductController.getAllProduct);



module.exports = router;

