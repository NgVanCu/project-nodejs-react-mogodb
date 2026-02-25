require('dotenv').config()
const express = require('express')
const app = express()
const webRoutes = require('./routes/web')

const port = process.env.PORT

app.use('/', webRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})