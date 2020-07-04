const mysql = require('mysql');
const db = require('../../db_connection');
exports.insert = function(number){
        return new Promise((resolve, reject) => {
            let insertQuery = "INSERT INTO test(number,created_on,updated_on) VALUES(?,?,?)"
            let query = mysql.format(insertQuery, [number , new Date() , new Date()])
            db.connection().query(query, (err, result) => {
                if (err) throw err
                return resolve(result);
            })
        })
}

exports.getAll = function(){
    return new Promise((resolve, reject) => {
        let query = "SELECT * FROM test"
        db.connection().query(query, (err, result) => {
            if (err) throw err
            return resolve(result);
        })
    })
}