const express = require('express');
const routerAPI = express.Router();

const {registerUser,loginUser} = require('../controllers/authController');
const {getAllUserController,getUserById,PutUpdateUser,deleteUser} = require('../controllers/userController');
routerAPI.post('/register',registerUser);
routerAPI.post('/login', loginUser);
// routerAPI.post('/file', uploadFile);
routerAPI.get('/view-users', getAllUserController);
routerAPI.get('/view-user/:id', getUserById);
routerAPI.put('/update-user/:id', PutUpdateUser);
routerAPI.delete('/delete-user/:id', deleteUser);
module.exports = routerAPI;