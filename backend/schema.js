const mongoose = require('mongoose')

const stuntSchema = new mongoose.Schema({
    title : {
        type : String,
    },
    description : {
        type : String,
       
    },
    image : {
        type : String,
       
    },
    video: {
        type : String
    },
    failRating : {
        type : Number
    },
    created_by: {
        type: String 
    }
})

const Stunt = mongoose.model('stuntfails',stuntSchema)

module.exports = Stunt
