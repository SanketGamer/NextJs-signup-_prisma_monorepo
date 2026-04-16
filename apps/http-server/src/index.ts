
import express from "express"
const app=express()
import {client} from "@repo/db/client"

app.use(express.json())

app.get("/",function(req,res){
res.send("edwfwe")
})

app.post("/signup",async function(req,res){
    console.log(req.body)
    const username=req.body.username;
    const password=req.body.password;
   const user=await client.user.create({
        data:{
            username:username,
            password:password
        }
    })
    res.json({
        message:"Signup Successfully",id:user.id
    })
})


app.listen(8080)