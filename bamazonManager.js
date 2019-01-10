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

  * If a manager selects `View Products for Sale`, the app should list every available item: 
  the item IDs, names, prices, and quantities.
  function:
if stock-quantity > 0 show those products in a table format

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