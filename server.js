const express = require("express");
const app = express();
const bp = require("body-parser");
const {urlencoded} = require("body-parser");
app.use(urlencoded({extented:true}));

app.use(express.static("assets"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/features",function(req,res){
    res.sendFile(__dirname+"/features.html");
});
app.get("/overview",function(req,res){
    res.sendFile(__dirname+"/pricing.html");
});
app.get("/connect",function(req,res){
    res.sendFile(__dirname+"/")
})
app.listen(4664,function(){
    console.log("Server Running at localhost:4664");
});