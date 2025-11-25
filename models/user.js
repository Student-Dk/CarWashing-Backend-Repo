const mongoose=require('mongoose')
const UserSchema= mongoose.Schema({
    name:String,
    mobileNo:String,
    washDate:String,
    washTmie:String,
    message:String,
    packageType:String
})

module.exports=mongoose.model('user',UserSchema)