const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async(req,res) =>{
    try{
        const {username, email, password} = req.body;

        const existingUser = await User.findOne({email}); 
        
        if(existingUser){
            return res.status(400).json({ message: "Email này đã tồn tại!"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            username,
            email,
            password : hashedPassword,
            role : 'user'
        })
        await newUser.save();
        res.status(201).json({
            message : 'Bạn đã đăng ký thành công',
            user: {username:newUser.username, password : newUser.password}
        })
    }catch(error){
        res.status(500).json({ message: 'Lỗi Server: ' + error.message});
    }
}
const loginUser = async(req,res) =>{
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({message : 'Email chưa đăng ký!'});
        }

        const isMatch = bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message: 'Password không đúng'});
        }
        
        const token = jwt.sign(
            {id: user._id, role: user.role},
            process.env.JWT_SECRET || 'secret_key_tam_thoi',
            { expiresIn: '1d' }
        );
        res.status(200).json({
            message: 'Đăng nhập thành công',
            token: token,
            user: {
                username : user.username,
                email: user.email,
                role: user.role
            }            
        })
    }catch(error){
        res.status(500).json({message: 'Lỗi Server' + error.message})
    }
}

module.exports = {registerUser,loginUser};

