const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("the application is working");
});
app.listen(9090,()=>{
    console.log("The webapp is running on the port 9090")
});
