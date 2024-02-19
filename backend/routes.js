const express = require('express');
const router = express.Router()
var cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser())
app.use(express.json())
const validation = require('./joi.js')
const mongoose = require('mongoose');
const Stunt = require('./schema.js');
const User = require('./schema/userSchema.js');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const validateRequest = (req, res, next) => {
  const { error } = validation.validate(req.body);
  if (error) {
      return res.status(400).json({ error: error.details[0].message });
  }
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
        created_by : req.body.created_by
    })

    try {
        const s1 = await stunt.save()
        res.json(s1)
    } catch (error) {
        res.send('err '+error)
    }
})

router.post("/login",async(req,res)=>{ 
  try {
      const newuser = await User.create(req.body);
      if (newuser) {
        const { _id, username } = newuser;
        const payload = { _id, username };
        const token = jwt.sign(payload, process.env.SECRET_KEY);
        res.status(201).json({newuser,token})
      } else {
          res.status(400).send("cannot create user ");
      }
  } catch (err) {
      console.error(err);
      res.send(" error " + err);
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