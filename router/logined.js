/**
 * Created by lenovo on 2017/3/3.
 */
var connection=require("../config/dbconfig")();
module.exports=function(req,res){
    var $sql="select * from micro";
    connection.query($sql,function(err,msg){
        if(err) throw err;
        if(msg.length>0){
            res.send({code:0,msg:msg})
        }else{
            res.send({code:1})
        }
    });
};