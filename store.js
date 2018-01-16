var mysql = require('mysqp');
var inquireer = require('inquirer');

//mysql connection

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "root",
    database: "bamazon_db"
  });


  //mysql connection to db
  connection.connect(function(err) {
      if (err) throw err;
      //run the start 
  })