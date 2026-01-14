require('dotenv').config(); 
const express=require('express');
const app=express();
const cors=require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const BookUser=require('./models/user')
const Admin=require("./models/Admin")

mongoose.connect("mongodb://localhost:27017/CarWashing").then(()=>{
    console.log("databac connected successfully")
}).catch((error)=>{
    console.log("error in databse connection ",error)
})


//Routes
const LoginRoute=require('./Routes/Login')
const BookingRoute=require('./Routes/Booking')
const Register=require('./Routes/Register')
const Dashboard=require('./Routes/dashboard')
const WashingPoints=require('./Routes/WashingPoints')
const Queryform=require('./Routes/Queryform')
const Pagedata=require('./Routes/pagedata')




app.use('/login',LoginRoute)
app.use('/booking',BookingRoute)
app.use('/register',Register)
app.use('/dashboard',Dashboard)
app.use('/washingPoint', WashingPoints)
app.use('/query',Queryform)
app.use('/pagedata',Pagedata)





app.get('/',(req,res)=>{
    res.send("you server is runnig")
})


app.listen(1200,()=>{
    console.log("your server is running on 1200")
})