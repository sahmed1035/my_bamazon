//Create a MySQL Database called `bamazon`

/* item_id (unique id for each product)

* product_name (Name of product)

* department_name

* price (cost to customer)

* stock_quantity (how much of the product is available in stores)*/
//================================
//WELCOME TO Bamazon   
//================================
//////////////////////////////////////////////////////////

var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "syedaahmed",

    // Your password
    password: "Aff0rdable",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //runSearch();
    afterConnection();
    connection.end();
});

function afterConnection() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        //console.log(res);
        //runSearch();
        productSearch();
        productUnit();
        connection.end();
    });
}


function productSearch() {
    inquirer
        .prompt({
            name: "productId",
            type: "input",
            message: "Enter the ID of the product you would like to buy.",
        },{
            name: "unit",
            type: "input",
            message: "How many units of the product you would like to buy?",
        }).then(function (answer) {
            var query = "SELECT item_id, product_name, department_name FROM products WHERE ?";
            connection.query(query, { item_id: answer.productId }, function (err, res) {

                console.log("Product ID: " + res[i].item_id + " || Product Name: " + res[i].product_name + " || Department: " + res[i].department_name);

            }
            )
        }
        )
}

