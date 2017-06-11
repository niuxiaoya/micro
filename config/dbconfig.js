var mysql=require("mysql");
module.exports=function(){
    var connection=mysql.createConnection({
        "http":"localhost",
        "prot":"3306",
        "user":"root",
        "password":"123123",
        "database":"cm_1502a"
    });
    connection.connect();
    return connection;
};
