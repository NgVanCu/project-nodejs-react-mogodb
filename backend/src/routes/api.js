const express = require('express');
const routerAPI = express.Router();

const getHomePage = require('../controllers/homeController')
const {registerUser,loginUser} = require('../controllers/authController');
const {getAllUserController,getUserById,PutUpdateUser,deleteUser} = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware')
const isAdmin = require('../middlewares/adminMiddleware');
const {createBook} = require('../controllers/bookController');
routerAPI.post('/register',registerUser);
routerAPI.post('/login', loginUser);
// routerAPI.post('/file', uploadFile);
routerAPI.post('/create-book', createBook);
routerAPI.get('/view-users', authMiddleware,isAdmin,getAllUserController);
// routerAPI.get('/view-user', authMiddleware,isAdmin,getUserById);
// routerAPI.put('/update-user', authMiddleware,isAdmin,PutUpdateUser);
// routerAPI.delete('/delete-user', authMiddleware,isAdmin,deleteUser);
module.exports = routerAPI;

// npm install --save-exact api-query-params@6.1.0