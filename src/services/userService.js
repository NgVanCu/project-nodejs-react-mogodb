const User = require('../models/userModel')

const getAllUsersService = async() =>{
    try{
        const users = await User.find().select('-password');
        return users;
    }catch(error){
        throw error;
    }
}

const getUserServiceById = async(userId) =>{
    try{
        const user = await User.findById(userId).select('-password');
        return user;
    }catch(error){
        throw error;
    }
}
const putUserUpdateService = async(userId, dataUpdate) => {
    try{
        const user = await User.findByIdAndUpdate(userId, dataUpdate, { new: true });
        return user;
    }catch(error){
        throw error;
    }
}
const deleteUserService = async (id) => {
    try {
        const deletedUser = await User.findByIdAndUpdate(
            id, 
            { 
                deleted: true, 
                deletedAt: new Date() 
            }, 
            { new: true }
        );
        
        return deletedUser;
    } catch (error) {
        throw error;
    }
}
module.exports = {getAllUsersService,getUserServiceById, putUserUpdateService,deleteUserService};