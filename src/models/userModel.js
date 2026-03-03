const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Tên là bắt buộc'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email là bắt buộc'], 
        unique: true,
        match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email không hợp lệ'], 
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'Mật khẩu là bắt buộc'],
        trim: true,
        minlength: [6, 'Mật khẩu phải có ít nhất 6 ký tự'],
    },
    phone: {
        type: String,
        required: [true, 'Số điện thoại là bắt buộc'],
        unique: true, 
        match: [/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/, 'Số điện thoại không hợp lệ']
    },
    address: { 
        type: String, 
        default: '' 
    },
    image: {
        type: String, 
        required: true
    },
    role: { 
        type: String, 
        default: 'user', 
        enum: ['user', 'admin']
    },
    deleted: { 
        type: Boolean, 
        default: false // Mặc định là chưa xóa
    },
    deletedAt: { 
        type: Date, 
        default: null // Mặc định là null
    }
}, { 
    timestamps: true 
});
userSchema.plugin(mongoose_delete);
module.exports = mongoose.model('User', userSchema);