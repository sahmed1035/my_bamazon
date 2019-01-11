/* ----
### Challenge #2: Manager View (Next Level)

* Create a new Node application called `bamazonManager.js`. Running this application will:

  * List a set of menu options:

    * View Products for Sale
    
    * View Low Inventory
    
    * Add to Inventory
    
    * Add New Product
/////////////////inquirer with list options
//////////////// make functions for each selection

  

  * If a manager selects `View Low Inventory`, then it should list all items with an inventory count 
  lower than five.
  function:
show items where stock-quantity < 5. 

  * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager 
  "add more" of any item currently in the store.
function:
inquirer .then update stock-quantity. check for number

  * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to
   the store.
function:
inquirer with all the fields .then update all the colums in the database. check for number
- - -
*/


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
  console.log("                        MANAGER VIEW                 ");
  console.log("===========================================================");
  askManager();
});


var askManager = function (res) {
  inquirer.prompt([{
    type: 'rawlist',
    name: 'choice',
    message: "What would you like to do?",
    choices: ["View Products for Sale", "View Low Inventory","Add to Inventory", "Add New Product"]
  }]).then(function (answer) {
    switch (answer) {
      case "View Products for Sale":
        productsForSale();
        break;

      case "View Low Inventory":
        lowInventory();
        break;

      case "Add to Inventory":
        addToInventory();
        break;

      case "Add New Product":
        addNewProduct();
        break;
      }
    });
}



// creating a maketable function to display all the data from the table
/** If a manager selects `View Products for Sale`, the app should list every available item: 
  the item IDs, names, prices, and quantities.
  function:
if stock-quantity > 0 show those products in a table format*/

// function productsForSale() {
  // var query = "SELECT item_id product_name price stock_quantity FROM products WHERE ? stock_quantity > 0";
  // connection.query(query, function(err, res) {
  //   for (var i = 0; i < res.length; i++) {
  //     console.table(res);
  //   }
  //   askManager();
  // });
//   console.log("I am product for sale function.")
// }



var productsForSale = function afterConnection() {
  connection.query("SELECT * FROM products WHERE ? > 0", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      (res[i].item_id + " || " + res[i].product_name + " || " +
        res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");

    }
    //results of the sql select statement
    console.table(res);
    //asking customer the item and quantity using inquirer
    askManager(res);

  });
}




// creating a maketable function to display all the data from the table
// var lowInventory = function afterConnection() {
//   connection.query("SELECT * FROM products", function (err, res) {
//     if (err) throw err;
//     for (var i = 0; i < res.length; i++) {
//       (res[i].item_id + " || " + res[i].product_name + " || " +
//         res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");

//     }
    //results of the sql select statement
    // console.table(res);
    //asking customer the item and quantity using inquirer
//     askManager();

//   });
// }


// creating a maketable function to display all the data from the table
// var addToInventory = function afterConnection() {
//   connection.query("SELECT * FROM products", function (err, res) {
//     if (err) throw err;
//     for (var i = 0; i < res.length; i++) {
//       (res[i].item_id + " || " + res[i].product_name + " || " +
//         res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");

//     }
    //results of the sql select statement
    // console.table(res);
    //asking customer the item and quantity using inquirer
//     askManager();

//   });
// }

// creating a maketable function to display all the data from the table
// var addNewProduct = function afterConnection() {
//   connection.query("SELECT * FROM products", function (err, res) {
//     if (err) throw err;
//     for (var i = 0; i < res.length; i++) {
//       (res[i].item_id + " || " + res[i].product_name + " || " +
//         res[i].department_name + " || " + res[i].price + " || " + res[i].stock_quantity + "\n");

//     }
    //results of the sql select statement
    // console.table(res);
    //asking customer the item and quantity using inquirer
//     askManager();

//   });
// }