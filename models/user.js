const mongoose=require('mongoose')
const UserSchema= mongoose.Schema({
    name:String,
    mobileNo:String,
    washDate:String,
    washTmie:String,
    washingPoint:String,
    message:String,
    packageType:String,
    message:String,
    bookingId: {
  type: Number,
  unique: true
}
})

module.exports=mongoose.model('user',UserSchema)