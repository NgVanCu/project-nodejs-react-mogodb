const {createCategoryService, getAllCategoriesService} = require('../services/categoryService');

const createCategoryController = async(req, res) =>{
    try{
        const {name, slug} = req.body;
        const tmp = {
            name: name,
            slug: slug
        }
        const result = await createCategoryService(tmp);
        return res.status(201).json({
            message: 'Tạo danh mục thành công',
            data: result
        })
    }catch(error){
        return res.status(500).json({message: 'Lỗi Server' + error.message})
    }
}

const getCategories = async (req, res, next) => {
    try {
        const categories = await getAllCategoriesService();
        res.status(200).json({
            message: 'danh mục sản phẩm',
            data: categories
        });
    } catch (error) {
        next(error);
    }
};
module.exports = {createCategoryController,getCategories}