require('dotenv').config();
// const express = require('express');
// const app = express();

// app.use(express.json());

// const mongoose = require('mongoose');
// const connectDb = require('./db.js')

// connectDb();

// mongoose.connection.once('open',()=>{
//   console.log('Connected to MongoDB')
//   // Home route
//   app.get('/',(req,res)=>{
//     res.send('Connected to MongoDB 🚀 Successfully');
//   })
// })

// // ping route
// app.get('/ping',(req,res)=>{
//   res.send('pong');
// })

// if (require.main === module) {
//   app.listen(3000, () => {
//     console.log(`🚀 server running on PORT: 3000`);
//   });
// }

// module.exports = app;


const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)

const con = mongoose.connection
con.on('open',()=>{
  console.log('Connected to MongoDB')
})
const stuntRouter = require('./routes.js')
app.use('/get',stuntRouter)

  app.listen(3000, () => {
    console.log(`🚀 server running on PORT: 3000`);
  });


module.exports = app;
