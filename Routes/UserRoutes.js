

const express = require('express');
const { getAllUser, getAllUserTester } = require('../Controllers/UserController');
const { userStoreRequest } = require('../Requests/UserRequests');
   
const router = express.Router();



router.post('/', getAllUser(userStoreRequest) , getAllUser);
// router.post('/').userStoreRequest().getAllUser();


 router.route("/testing").get(getAllUserTester);



module.exports = router;

