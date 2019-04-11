var http=require('http');
var server = http.createServer();
var fs=require('fs');

server.listen('3000','192.168.83.48',()=>{
  console.log('server正在运行');
  
})

server.on('request',(req,res)=>{
   fs.readFile('./firstPage.html','utf-8',(err,data)=>{
     if (err) {
       return console.log(err.message);
     }
     res.write(data);
     res.end();
   })
})