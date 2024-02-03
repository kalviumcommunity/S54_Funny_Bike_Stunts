require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
app.get('/',(req,res)=>{
  const isConnected = db ? true : false;
  res.send(`
  Connection Status :  ${isConnected ? 'Connected to Mongodb Successfully' : 'Failed to connect to database'}`)
})

// ping route
app.get('/ping',(req,res)=>{
  res.send('pong');
})


  app.listen(3000, () => {
    console.log(`🚀 server running on PORT: 3000`);
  });


module.exports = app;
