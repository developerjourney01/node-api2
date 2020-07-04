const mysql = require('mysql');
const db = require('../../db_connection');
exports.insert = function(number){
        console.log(number)
        return new Promise((resolve, reject) => {
            let insertQuery = "INSERT INTO test(number,created_on,updated_on) VALUES(?,?,?)"
            let query = mysql.format(insertQuery, [number , Date.now() , Date.now()])
            db.connection.query(query, (err, result) => {
                if (err) throw err
                return resolve(result);
            })
        })
}