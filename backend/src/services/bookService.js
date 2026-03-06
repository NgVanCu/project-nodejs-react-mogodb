
const bookModel = require('../models/bookModel');


const createBookService = async(newBook) =>{
    try{
        const result = await bookModel.create(newBook)
        return result;
    }catch(error){
        throw error
    }
}
const putBookService = async(bookId,updateBook) => {
    try{
        const result = await bookModel.findByIdAndUpdate(bookId, updateBook, { new: true });
        return result;
    }catch(error){
        throw error
    }
}
const deleteBookService = async(bookId) =>{
    try {
        const result = await bookModel.deleteById(bookId);
        return result;
    }catch(error){
        throw error;
    }
}
const restoreUserService = async(id) =>{
    try{
        const result = await bookModel.restore({ _id: id });
        return result;          
    }catch(error){
        throw error;
    }
}
module.exports = {createBookService, putBookService,deleteBookService}