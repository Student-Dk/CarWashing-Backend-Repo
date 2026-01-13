const mongoose=require('mongoose')

const UserSchema=mongoose.Schema({
    name:String,
    email:String, 
    subject:String,
    message:String,
    date:{
        type:Date, 
        default:Date.now
    },
    status: {
  type: String,
  default: 'Pending'
}

})

module.exports=mongoose.model('Query',UserSchema);