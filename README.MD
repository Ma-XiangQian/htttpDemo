# 一个简单的express代码

前端小白，学git的仓库...

```js

import express from "express";

const app = express();

app.use(express.static("public"))

app.get('/',(req, res)=>{
  res.sendFlie(__dirname__+"/public/index.html")
});

app.use(function(req,res,next){
  res.send("资源无法找到： 404")
})

app.listen(80,function(err){
    if(!err)console.log("服务器开启啦...");
})

```