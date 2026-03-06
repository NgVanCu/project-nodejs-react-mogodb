const User = require('../models/userModel');

const createUserService = async (userData) => {
    
    const user = await User.create({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        phone: userData.phone,
        address: userData.address,
        image: userData.image, // Lưu đường dẫn ảnh
        role: 'user'
    });
    return user;
};

module.exports = { createUserService };