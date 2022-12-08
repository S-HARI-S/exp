const express = require('express');
const mongoose = require('mongoose');
const { db } = require('./model/ret.js');
const app = express();
const retailer = require('./model/ret.js');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}))
// const retailer = require('./views/index.ejs');
app.listen(3000, ()=> {
  console.log("Server is running on : http://localhost:3000/");
});


mongoose.set('strictQuery', false);
const uri = 'mongodb+srv://raspberry:TJPmCtVfR8eKonmB@cluster1.enfdems.mongodb.net/?retryWrites=true&w=majority'

async function connect(){
  try{
    await mongoose.connect(uri);
    console.log("connected to MongoDB ")
  }
  catch(Error){
    console.error(Error);  
  }
}

connect();

app.use(express.static('public'))

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.get("/user", (req, res) => {
  res.render("customer.ejs");
});



// const createDoc = async () =>{
//   try{
//     const data = new retailer({

//       shopName: "marutu store",
//     item: "bottle",
//     quanity: 34,
//     })
    
//     const doc = await data.save();
//     console.log(doc);
//   }
//   catch(err){
//     console.error(err);
//   }
// }
// createDoc();

app.post("/", (req , res) =>{
  const createDoc = async () =>{
    try{
      const data = new retailer({
  
      shopName: req.body.shop_name,
      item: req.body.shop_items,
      quanity: req.body.item_quantity,
      })
      
      const doc = await data.save();
      console.log(doc);
    }
    catch(err){
      console.error(err);
    }
  }
  createDoc()
  res.redirect("/");
})

// mongoose.connect(
//     'mongodb://raspberry:eLEtnOd2L9rLFzWs@cluster0-shard00-00.4vcln.mongodb.net:27017,cluster0-shard-00-01.4vcln.mongodb.net:27017,cluster0-shard-00-02.4vcln.mongodb.net:27017/?ssl=true&replicaSet=atlas-5fmlmn-shard-0&authSource=admin&retryWrites=true&w=majority',
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     },
//     (err) => {
//       if (!err) {
//         console.log("MongoDB Connection Succeeded.");
//       } else {
//         console.log("Error in DB connection : " + err);
//       }
//     }
//   );
  

  // app.get('/index' , (req,res) => {


  //   Blog.find().sort({createdAt : -1})
  //   .then(result => {
      
  //    res.render('editor' , {title : 'Editor' , blogs: result});
  
  //   })
  //   .catch(err => console.log(err))
  
  
  
  // });
  
  
