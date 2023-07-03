var fs = require('fs')

var buffer = Buffer.from("Hello omkara")
fs.open("data.txt" , "w",(err,fd) =>{
    fs.write(fd,buffer,0,buffer.length,0,(err,a2,a3)=>{
        console.log("file successfully written")

        fs.close(fd,(err)=>{
            console.log("file successfully closed")
        })
    })
})