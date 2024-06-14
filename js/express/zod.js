const express = require("express");
const zod = require("zod");

const app = express();

function validateInput(obj) {
    const schema = zod.object({
        email : zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/login", function(req,res) {
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg: "your input are invalid "
        })
        // return;
    }else{
        res.json({
            msg: "Your input is submitted"
        })
    }
})

app.listen(3000, ()=>{
    console.log("port 3000 is running...")
})