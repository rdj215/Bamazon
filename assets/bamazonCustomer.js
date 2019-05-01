var mysql = require("mysql");
require("console.table");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Rylee2019.",
  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  getAllProducts();
});

function getAllProducts(){
  connection.query("SELECT * FROM products", function(err,response){
    if(err) throw err;
    console.table(response)
    customerQuestions();
  })
}

function customerQuestions(){
  inquirer.prompt([{
    type: 'input',
    name: "productId",
    message: "What's the product ID of the item you would like to buy?"
  },{
    type: 'input',
    name: "quanity",
    message: "How many would you would like to buy?"
  }
]).then(function(answer){
  console.log(answer)
  updateProductTable(answer);
})
}

function updateProductTable(answer){
  connection.query("SELECT * FROM products WHERE item_id = ?", [answer.productId],function(err,response){
    if(err) throw err;
    
    if( [response[0].stock_quanity] <= parseInt(answer.quanity)){
      getAllProducts();
      return console.log("Sorry there is not enough items in stock")
    }
    
    if( response[0].stock_quanity >= parseInt(answer.quanity)){
      connection.query("UPDATE products SET stock_quanity = ? WHERE item_id = ?", 
    [response[0].stock_quanity-parseInt(answer.quanity),answer.productId],function(err,response){
     
        
          console.log("Thank you for your order")
      getAllProducts();
    }
   
        
      
    )}
   
      
      
      // getAllProducts();
      // if(answer.quanity <= stock_quanity){
      //   return "Congragulations on your order"

      // }
      // return " Sorry there is not enough in stock, please try again"
  // )}
  })}

  
