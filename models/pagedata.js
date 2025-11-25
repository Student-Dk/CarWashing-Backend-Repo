const mongoose=require('mongoose')
const pageSchema=mongoose.Schema({
    OpeningHour:String,
    callus:String,
    Email:String,
    address:String,
    about:String,
})

module.exports=mongoose.model('pageview',pageSchema)