require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDb = require('./db.js')

connectDb();

mongoose.connection.once('open',()=>{
  console.log('Connected to MongoDB')
  // Home route
  app.get('/',(req,res)=>{
    res.send('Connected to MongoDB 🚀 Successfully');
  })
})

// ping route
app.get('/ping',(req,res)=>{
  res.send('pong');
})

if (require.main === module) {
  app.listen(3000, () => {
    console.log(`🚀 server running on PORT: 3000`);
  });
}

module.exports = app;
