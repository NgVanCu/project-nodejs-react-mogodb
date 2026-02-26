require('dotenv').config()
const express = require('express')
const cors = require('cors') // 1. Nên cài thêm cái này (npm install cors)
const app = express()

// 2. Đổi tên biến thành apiRouter cho đúng nghĩa "Tổng quản"
const apiRouter = require('./routes/api'); 
const connectDB = require('./configs/db')

// Middleware
app.use(cors()); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Kết nối DB
connectDB();

const port = process.env.PORT || 8080;

app.use('/api/v1', apiRouter);

app.listen(port, () => {
  console.log(`🚀 Server đang chạy tại port ${port}`)
})