var mysql = require('mysql');
var inquirer = require('inquirer');
var colors = require('colors');
require('console.table');

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
    stockList();
});

//function for showing stock list
function stockList() {
    connection.query("SELECT * FROM items", function (err, res) {
        if (err) throw err;
        console.table(res);
        whichItem();
    });
};
//stockList();

//promt user for action onto database
function whichItem() {
    inquirer
        .prompt([
            {
                name: 'item',
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
        .then(function (response) {
            var itemID = response.item;
            var userChoice = response.answer;

            //updates stock ticker based on user buy amount 
            connection.query("SELECT id, Name, Department, Price, In_Stock FROM items WHERE ?", { id: itemID }, function (err, res) {
                var stock = res[0].In_Stock;
                // if (userchoice > stock) {
                //     console.log("amount specified is not in stock, please try again")
               // } else 
                if (userChoice < stock) {
                    var update = res[0].In_Stock - userChoice;
                    connection.query("UPDATE items SET ? WHERE ?",
                        [{
                            //add user choice to database
                            In_Stock: update
                        },
                        {
                            //for itemID that user selected to be affected
                            id: itemID
                        }]
                    );
                    console.log("You bought it");
                    stockList();       
                };

                //if the stock is 0 then "display out of stock"
                if (res[0].In_Stock <= 0) {
                    console.log("Out of stock")
                };
            });
        });

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