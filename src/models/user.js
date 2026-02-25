const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: true, // Không được trùng email
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Pass ít nhất 6 ký tự cho an toàn
    },
    role: {
        type: String,
        enum: ['user', 'admin'], // Chỉ nhận 1 trong 2 giá trị này
        default: 'user' // Mặc định tạo tài khoản mới là User thường
    },
    avatar: {
        type: String, // Link ảnh đại diện (sau này làm)
        default: ''
    }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);