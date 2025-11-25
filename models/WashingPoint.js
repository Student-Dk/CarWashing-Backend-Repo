const mongoose=require('mongoose');
const WashingPointSchema=mongoose.Schema({
    Car_Washing_Point_Name:String,
    Address:String,
    Contact_No:String
})
module.exports=mongoose.model('Washing_points',WashingPointSchema)