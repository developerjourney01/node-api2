var mysql = require('mysql');

exports.connection  =  function(){
    var con = mysql.createConnection({
        host: "35.240.183.120",
        user: "test",
        password: "123456789",
        database: 'test'
    });

    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    return con;
}