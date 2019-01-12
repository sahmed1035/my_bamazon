//referencing the required packages
var mysql = require("mysql");
var inquirer = require("inquirer");
//https://www.npmjs.com/package/console.table
const cTable = require('console.table');
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "syedaahmed",

  // Your password
  password: "Aff0rdable",

  //database name
  database: "bamazonDB"
});
// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connection Successful!");
  console.log("connected as id " + connection.threadId);
  console.log("===========================================================");
  console.log("                         ITEMS FOR SALE                   ");
  console.log("===========================================================");
  itemsAvailable();
});
// creating an itemAvailble function to display all the data from the table
var itemsAvailable = function afterConnection() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      (res[i].item_id + " || " + res[i].product_name + " || " +
        res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");

    }
    //results of the sql select statement
    console.table(res);
    //asking customer the item and quantity using inquirer
    askCustomer(res);

  });
}
var totalCost = 0;

var askCustomer = function (res) {
  inquirer.prompt([{
    type: 'input',
    name: 'choice',
    message: "What would you like to purchase? Enter prodct name."
  }]).then(function (answer) {
    var correct = false;
    for (var i = 0; i < res.length; i++) {
      if (res[i].product_name == answer.choice) {
        correct = true;
        var product = answer.choice;
        var id = i;
        inquirer.prompt({
          type: 'input',
          name: 'quant',
          message: "How many of " + product + " would you like to buy? ",
          validate: function (value) {
            if (isNaN(value) == false) {
              return true;
            } else {
              return false;
            }

          }
        }).then(function (answer) {
          if ((res[id].stock_quantity - answer.quant) > 0) {
            connection.query("UPDATE products SET stock_quantity='" +
              (res[id].stock_quantity - answer.quant) +
              "' WHERE product_name='" + product + "'",
              function (err, res2) {
                console.log("Product pruchased successfully!");
                totalCost = (answer.quant) *(res[id].price);
                console.log("You Paid: " + totalCost);
                buyMore();
              }
            );
          } else {
            console.log("Not a valid selecction!");
            askCustomer(res);
          }

        })
      }
    }

  })
}


function buyMore() {
  inquirer
    .prompt({
      name: "choice",
      type: "rawlist",
      message: "Would you like to buy more items?",
      choices: ["YES", "NO"]
    })
    .then(function (answer) {
      // based on their answer, either call the itemAvailble function  or end the connection.
      if (answer.choice.toUpperCase() === "YES") {
        itemsAvailable();
      }
      else {
        connection.end();
      }
    });
}