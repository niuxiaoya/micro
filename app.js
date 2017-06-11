/**
 * Created by lenovo on 2017/6/10.
 */
const express=require("express");
const ejs=require("ejs");
const path=require("path");
const bodyparser=require("body-parser");

const app=express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"lib")));
app.set("views",path.join(__dirname,"views"));
app.set("view engine","html");
app.engine("html",ejs.__express);

var route=require("./router")(app);

app.listen(3000,function(){
    console.log("listen 3000...");
});