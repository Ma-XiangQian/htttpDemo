import express from "express";

const app = express();

app.get('/',(req, res)=>{
  res.send("我是你的网页...");
});

app.listen(80,function(err){
    if(!err)console.log("服务器开启啦...");
})