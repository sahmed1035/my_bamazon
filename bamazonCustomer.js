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

var mysql = require("mysql"); //referencing the packages
var inquirer = require("inquirer");

//creating mysql connection
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
    itemsAvailable();
    connection.end();
    //ctr+c to stop server
})

//after connection printing the data in a table format.
//display all of the items available for sale. Include the ids, names, and prices of 
 //products for sale.

var itemsAvailable = function(){
    connection.query("SELECT * FROM products", function(err, res){
        //if (err) throw err;
        for (var i=0; i<res.lenght; i++){
            console.log(res[i].item_id+"||"+res[i].product_name+"||"+res[i].department_name+"||"+res[i].price+"||"+res[i].stock_quantity+"||");
        }
        askCustomer(res);
    })
}

var askCustomer =function(res){
    inquirer.prompt([{
        type: 'input',
        name:'choice',
        message:"Select the ID of the product you would like to buy.",
    }]).then(function(answer){
        var correct = false;
        for(var i=0; i<res.lenght; i++){
            if(res[i].product_name==answer.choice){
                correct = true;
                var product = answer.choice;
                var id = i;
                inquirer.prompt({
                    type: 'input',
                    name: 'quantity',
                    message: "How many units of the product you would like to buy?",
                    validate: function(value){
                        if(isNaN(value)==false){
                            return true;
                        }else {
                            return false;
                        }
                    }
                }).then(function(answer){
                    if((res[id].stock_quantity-answer.quantity)>0){
                        connection.query("UPDATE products SET stock_quantity=+(res[id].stock_quantity-answer.quantity)+WHERE product_name=+product"
                        , function(err, res2){
                            console.log("Product purchased successfully!");
                            askCustomer();
                        })
                    }else {
                        console.log("Not a valid selection!");
                        askCustomer(res);
                    }
                })
            }
        }
        if(i==res.lenght && correct==false){
            console.log("Not a valid selection!");
            askCustomer(res);
        }
    })
}


