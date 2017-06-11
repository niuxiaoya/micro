/**
 * Created by Administrator on 2017/1/13.
 */
//引入数据库mysql模块
var mysql=require("mysql");
var config=require("../config/dbconfig");
//配置打开数据库
var connection=mysql.createConnection(config);
//链接数据库
connection.connect();
module.exports=function(callback){
    var $sql="select * from micro";
    //查询数据库
    connection.query($sql,function(err,result){
        if(err){
            callback(err)
        }else{
            callback(null,result)
        }
    });

};


