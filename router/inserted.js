/**
 * Created by lenovo on 2017/3/3.
 */
var connection=require("../config/dbconfig")();
module.exports=function(req,res){
    //console.log(req.body.title+req.body.editor)
    var $sql='insert into micro (title,content) values("'+req.body.title+'","'+req.body.content+'")';
    console.log($sql);
    connection.query($sql,function(err,msg){
        if(err) throw err;
        res.json({"code":0,"msg":msg});
    });
    //connection.query()
};