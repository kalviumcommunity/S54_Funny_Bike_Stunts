const mongoose = require('mongoose')

const stuntSchema = new mongoose.Schema({
    title : {
        type : String,
    },
    description : {
        type : String,
       
    },
    image_link  : {
        type : String,
       
    },
    video_link : {
        type : String
    }
    // failRating : {
    //     type : Number
    // },
    // Location : {
    //     type : String
    // }
})

const Stunt = mongoose.model('Stunts',stuntSchema)

module.exports = Stunt