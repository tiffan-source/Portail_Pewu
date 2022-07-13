let mysql = require("mysql");

let connection = mysql.createConnection({
    database : "Calendar",
    host : "localhost",
    user : "tiffane",
    password : "Anlyou4545",  
})

connection.connect((err)=>{
    if(err) console.log("No connect")
    else console.log("Connect to Db")
})

module.exports = connection;