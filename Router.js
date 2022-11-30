const route=require("express").Router()
const users=require("./usersschema")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const product= require("./productschema")
const Category= require("./Category")
const Smallproducte = require("./Smallproducte")


// Register

route.post("/register", async (req, res) => {
  
  try {
    let alreadyEmail = await users.findOne({ email: req.body.email }); //dbquery
    if (alreadyEmail) {
      return res.status(400).json("Email exist");
    }
    let pass = await bcrypt.hash(req.body.password, 10);
    const data = new users({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: pass,
     

    });
    let user = await data.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }

});
  

 //login
 
  route.post("/login", async (req, res) => {
    try {
      let user = await users.findOne({ email: req.body.email }); //dbquery
  
      if (!user) {
        return res.status(400).json("please register!");
      }
  
      let passwordValidation = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordValidation) {
        return res.status(400).json("Your Password Wrong!");
      }
  
      let accessToken = jwt.sign({ email: user.email }, "SecretKey");
  
  
      res.header("auth", accessToken).send(accessToken);
    } catch (err) {
      res.status(500).send("Wrong credentials...!");
    }
  });

  // product
  
route.post("/products",async (req,res)=>{
     try {
         const data = await new product({
          name: req.body.name,
          image: req.body.image,
          price: req.body.price,
          description: req.body.description,
         });
         let productsdata = await data.save();
         res.status(200).json(productsdata);
     } catch (error) {
      res.status(500).send("Wrong credentials...!");
     }
  })

  route.get("/allproducts",async(req,res)=>{
  try {
      const data = await product.find();
      res.status(200).json(data);
      

  } catch (error) {
    res.status(500).send("Wrong credentials...!");
  }
})

route.get("/details/:id",async(req,res)=>{
  try {
      const data = await product.findById(req.params.id);
      res.status(200).json(data);
      

  } catch (error) {
    res.status(500).send("Wrong credentials...!");
  }
})



// Category

route.post("/Category",async (req,res)=>{
  try {
      const data = await new Category({
       name: req.body.name,
       image: req.body.image,
       price: req.body.price,
      });
      let productsdata = await data.save();
      res.status(200).json(productsdata);
  } catch (error) {
   res.status(500).send("Wrong credentials...!");
  }
})

route.get("/allCategory",async(req,res)=>{
try {
   const data = await Category.find();
   res.status(200).json(data);
   

} catch (error) {
 res.status(500).send("Wrong credentials...!");
}
})

// Smallproducte

route.post("/Smallproducte",async (req,res)=>{
  try {
      const data = await new Smallproducte({
       name: req.body.name,
       image: req.body.image,
       price: req.body.price,
      });
      let productsdata = await data.save();
      res.status(200).json(productsdata);
  } catch (error) {
   res.status(500).send("Wrong credentials...!");
  }
})

route.get("/allSmallproducte",async(req,res)=>{
try {
   const data = await Smallproducte.find();
   res.status(200).json(data);
   

} catch (error) {
 res.status(500).send("Wrong credentials...!");
}
})


module.exports = route;
