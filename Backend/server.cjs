const express=require('express');
var cors=require('cors');
require('dotenv').config();

port=process.env.PORT
const app=express()
app.use(cors())
app.use(express.json())
app.use('/api/product',require('./routes/products.cjs'))
app.listen(port)