
const express = require('express');
const app = express();

app.listen(4000,function(){
  console.log('Server started to listen')
});

app.get("/",function(request , response ){
  response.send('this is first example')
  console.log('Request Receive');
})
