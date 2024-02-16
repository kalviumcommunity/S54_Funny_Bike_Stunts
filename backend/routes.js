const express = require('express');
const router = express.Router()
const app = express();
app.use(express.json())
const validation = require('./joi.js')
const mongoose = require('mongoose');
const Stunt = require('./schema.js');
const User = require('./schema/userSchema.js');

const validateRequest = (req, res, next) => {
  const { error } = validation.validate(req.body);
  if (error) {
      return res.status(400).json({ error: error.details[0].message });
  }
  res.send("Data got validated successfully ")
  next();
};


router.get('/',async (req,res)=>{
    try{
    const data = await Stunt.find({})
    res.json(data)
    console.log("get request")
    }catch(err){
        res.send('err'+err)
    }
})

router.get('/:id',async (req,res)=>{
    try{
    const stunt = await Stunt.findById(req.params.id)
    res.json(stunt)
    }catch(err){
        res.send('err'+err)
    }
})

router.post('/',validateRequest,async(req,res)=>{
    const stunt = new Stunt({
        title : req.body.title,
        description : req.body.description,
        image : req.body.image,
        video : req.body.video,
        failRating : req.body.failRating,
        Location : req.body.Location
    })

    try {
        const s1 = await stunt.save()
        res.json(s1)
    } catch (error) {
        
    }
})

router.post("/login",async(req,res)=>{
  try {
      const newuser = await User.create(req.body);
      if (newuser) {
          res.status(201).json(newuser);
      } else {
          res.status(400);
          throw new Error("cannot create user ");
      }
  } catch (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
  }
})

router.patch('/:id',validateRequest,async(req,res)=>{
    try {
        const stunt = await Stunt.findById(req.params.id)
        if (!stunt) {
            return res.status(404).json({ error: 'Stunt not found' });
          }
        stunt.title = req.body.title
        stunt.image = req.body.image  
        stunt.failRating = req.body.failRating
        const s1 = await stunt.save()
        res.json(s1)
    } catch (error) {
        res.send('Err' + error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
      const stunt = await Stunt.findByIdAndDelete(req.params.id);
    //   res.status(201).send(stunt)
      if (!stunt) {
        return res.status(404).json({ error: 'Stunt not found' });
      }
    //   await stunt.remove();
      res.json({ message: 'Stunt deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



module.exports = router