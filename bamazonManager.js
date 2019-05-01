var mysql = require("mysql");
require("console.table");
var inquirer = require("inquirer");
// Connecting to My SQL
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

  connection.connect(function(err){
      if (err) throw err;
      console.log("connected as id" + connection.threadId + "\n");
      menuOptions();
  });

  function menuOptions(){
      inquirer.prompt([{
          type: "list",
          name:"mainMenu",
          message: "Welcome, please select your option",
          choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
      }
    ]).then(function(answer){
        if(answer.mainMenu==="View Products for Sale"){
            connection.query("SELECT * FROM products", function(err,response){
                if(err) throw err;
        console.table(response)
        // userChoice(answer);
    })
  }
  if(answer.mainMenu==="View Low Inventory"){
    connection.query("SELECT * FROM products where stock_quanity = ?", function(err,response){
        if(err) throw err;
        console.table(response)

console.table(response)
// userChoice(answer);
})
  }

//   function userChoice(answer){
     
//     if(answer==="View Products for Sale"){
//         connection.query("SELECT * FROM bamazon_db", function(err,response){
//             if(err) throw err;
//             // return console.log(response.product_name)
//         })
//     }

//     }

} )
  }