const express = require('express');
const router = express.Router()
const app = express();
app.use(express.json())

const mongoose = require('mongoose');
const Stunt = require('./schema.js')

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

router.post('/',async(req,res)=>{
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
router.put('/:id', async(req,res)=>{
  try {
    const id = req.params.id
      const stunt = await Stunt.findByIdAndUpdate({_id:id},{
        title : req.body.title ,
        image : req.body.image,
        failRating : req.body.failRating
      })
      if (!stunt) {
          return res.status(404).json({ error: 'Stunt not found' });
        }
      
      const s1 = await stunt.save()
      res.json(s1)
  } catch (error) {
      res.send('Err' + error)
  }})

router.patch('/:id',async(req,res)=>{
    try {
        const stunt = await Stunt.findById(req.params.id)
        if (!stunt) {
            return res.status(404).json({ error: 'Stunt not found' });
          }
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