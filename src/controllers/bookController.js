const Book = require('../models/book')

const createBook = async(req,res) =>{
    try{
        const {title,author,price,category,stock,description,imageUrl} = req.body;
        
    }catch(error){
        res.status(500).json({message: 'Lỗi Server' + error.message})
    }
}