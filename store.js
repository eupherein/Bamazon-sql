var mysql = require('mysql');
var inquirer = require('inquirer');

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
connection.connect(function (err) {
    if (err) throw err;
    //run start function after connection has been established
    start();
});

//function for showing stock list
function stockList() {
    var sql = "SELECT * FROM items";
    connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        whichItem();
    });
};
stockList();

//promt user for action onto database

function whichItem() {
    inquirer
        .prompt([
            {
                name: 'action',
                type: 'input',
                message: "Purchase item by ID number"
            },
            {
                name: 'answer',
                type: 'input',
                message: "How many?"
            }
        ])
        //links database information to store options
        .then(function (res) {
            var itemID = response.action;
            var userChoice = response.answer;

            connection.query("SELECT id, Name, Department, Price, In_Stock FROM items WHERE ?", { id: itemID }, function (err, res) {
                var stock = res[0].In_Stock;
                if (userChoice < stock) {
                    var update = res[0].In_Stock - userChoice;
                    connection.query("UPDATE items SET ? WHERE ?",
                    )
                }
            })
        })

};







// //function for displaying list of actions
// function start() {
//     inquireer
//         .prompt({
//             name: "bidOrSell",
//             type: "rawlist",
//             message: "Would you like to buy [BID] or sell [LIST]?",
//             choices: ["BID"]
//         })
//         .then(function (answer) {
//             if (answer.bidOrSell.toUpperCase() == 'SELL') {
//                 //sellItem();
//             }

//             else {
//                 //buyItem();
//             }


//         });
// }