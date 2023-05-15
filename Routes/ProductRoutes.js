


const express = require('express');
const { getAllUser } = require('../Controllers/UserController');
const { userStoreRequest } = require('../Requests/UserRequests');
const ProductController = require('../Controllers/ProductController');
   
const router = express.Router();



router.post('/', ProductController.getAllProduct(userStoreRequest) , ProductController.getAllProduct);

router.route("/testing").get(ProductController.getAllUserTester);



module.exports = router;

