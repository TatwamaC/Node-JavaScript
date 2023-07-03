const fs = require('fs') 

console.log("opening")
fs.open("text.txt",'r',function(err,fd){
if(err)
console.log("Error occur",err);
var buffr = Buffer.alloc(1024);

fs.read(fd,buffr,0,buffr.length,0,function(err,bytes){
    if(err) throw err;

    if(bytes>0){
        console.log(buffr.toString());
    }

    fs.close(fd,function(err){
        if(err) throw err;
    })
})

})
