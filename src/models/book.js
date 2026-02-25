const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: [true, 'Tên sách không được để trống'],
        trim: true 
    },
    author: { 
        type: String, 
        required: [true, 'Tên tác giả không được để trống'] 
    },
    price: { 
        type: Number, 
        required: [true, 'Giá sách phải là số'],
        min: 0 
    },
    category: { 
        type: String, 
        enum: ['Văn học', 'Kỹ thuật', 'Kinh tế', 'Kỹ năng'], // Giới hạn thể loại
        default: 'Văn học'
    },
    stock: { 
        type: Number, 
        default: 0 
    },
    description: String,
    imageUrl: String // Lưu link ảnh bìa sách
}, { 
    timestamps: true // Tự động tạo createdAt (ngày nhập) và updatedAt (ngày sửa)
});

module.exports = mongoose.model('Book', bookSchema);