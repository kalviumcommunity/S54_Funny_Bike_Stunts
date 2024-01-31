const express = require('express');
const app = express();

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
