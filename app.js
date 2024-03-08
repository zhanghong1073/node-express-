const express = require('express');
const morgan =require('morgan');
const cors= require('cors');
const router =require('./router')
const app = express();

app.use(morgan('dev'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use('/api',router)

const PROT = process.env.PROT || 3000;


app.listen(PROT,()=>{
  console.log('成功调用端')
})