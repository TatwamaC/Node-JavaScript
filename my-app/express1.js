let express = require("express")

let app = express();

app.get("/", function(req,res){
    res.send("<h1>Welcome to first page in express</h1>")
})

app.get("/date", function(req,res){
   let str ="";
   let d = new Date();
   str += "Today is : "+d.toString();
   res.send(str);
})
app.get("/admin",(req,res)=>{
    res.send("Welcome Admin");
})

app.listen(3000,
    ()=>{console.log("App is listening on http://localhost:3000")
})

//equivalent to :- http.createserver.listen(3000,"voaksjd")
