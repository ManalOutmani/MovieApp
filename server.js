const express = require('express');
const path=require('path');
const app=express()

app.use('/',express.static(path.join(__dirname,'angular')));

app.get('',(req,res)=>{
  res.sendFile(path.join(__dirname,'filmsapp/src','index.html'));
});

/*app.listen(8080,()=>{
  console.log('server running http://localhost:${8080}');
});*/

app.listen(process.env.PORT || 8080);
