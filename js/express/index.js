// const express = require("express");
// const zod = require("zod");
// const app = express();

// // const schema = zod.array(zod.number());

// const schema = zod.object({
//   email: zod.string(),
//   password: z.string(),
//   country: z.literal("IN").or(z.literal("US")),
//   kidney: z.array(z.number())
// })

// app.use(express.json());

// app.get('/', (req,res)=> {
//   res.send('Server Started');
// })

// app.post("/health", function(req,res){
//   const kidney = req.body.kidney;
//   const response = schema.safeParse(kidney)
//   if(!response.success){
//     res.status(411).json({
//       msg: "Invalid Input"
//     })
//   }else {
//     res.send({
//       response
//     })
//   }
 

//   // const kidneyLength = kidney.length;
//   // res.send('you have '+ kidneyLength +' kidneys');
// })


// // global cache
// // app.use(function(err,req,res,next) {
// //   res.json({
// //     msg: "something is up with our server" 
// //   })
// // })

// app.listen(3000,()=>{
//   console.log("running on port 3000")
// });  



const express =require("express")
const app = express();

app.use(express.json());

app.get("/",(req,res)=>{

  res.json({
    msg:" this is get request"
  })
  res.send(count);

})

app.post("/login",(req,res)=>{
  const  count = req.body.email;
  
  res.send(count);
  
})

app.listen(3000);