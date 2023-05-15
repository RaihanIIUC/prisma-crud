


const express = require('express');
const PackController = require('../Controllers/PackController');
const { packStoreRequest } = require('../Requests/packStoreRequest');
    
const router = express.Router();



// router.post('/', ProductController.storeProduct(productStoreRequest) ,ProductController.storeProduct);

router.route("/").post(PackController.storePack(packStoreRequest) ,PackController.storePack);
router.route("/").get(PackController.getAllPack);



module.exports = router;

