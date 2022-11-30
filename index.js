const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Router = require("./Router");
const cors = require("cors");
const port = 5000;

// const pizzasRoute =require("./Router/pizzasRoute")
// const userRoute =require("./Router/userRoute")
// const ordersRoute =require("./Router/ordersRoute")






//middleware

app.use(express.json());

app.use(cors());

 

app.use(cors({
    origin: "*",
}))
// app.use('/api/pizzas/',pizzasRoute)
// app.use('/api/users/',userRoute)
// // order delete
//  app.use('/api/orders/',ordersRoute)
// // order delete 
// app.get("/",(req,res)=>{
//     res.send("Server Working") 
// })



//db connection

mongoose.connect('mongodb://localhost:27017/demo',{useNewUrlParser:true,useUnifiedTopology:true},()=>{
       console.log("database start")
});



//route

app.use("/auth",Router);



//port

app.listen(port,() =>console.log("port running"));



// new


// const express= require("express");
// const Pizza=require("./models/pizzaModel")
// const db=require("./db.js")
// const app=express();
// const cors = require("cors");
// app.use(express.json());
 
// const pizzasRoute =require("./routes/pizzasRoute")
// const userRoute =require("./routes/userRoute")
// const ordersRoute =require("./routes/ordersRoute")

// app.use(cors({
//     origin: "*",
// }))
// app.use('/api/pizzas/',pizzasRoute)
// app.use('/api/users/',userRoute)
// // order delete
//  app.use('/api/orders/',ordersRoute)
// // order delete 
// app.get("/",(req,res)=>{
//     res.send("Server Working") 
// })


 
// app.listen(process.env.PORT || 3001)  