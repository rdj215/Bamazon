# Bamazon
For this application  I created an online store that runs on the command line in the terminal using node.js and MYSQL. I created the code for the SQL databse in BAMAZON.SQL, installed the necessarry node packages which are stored in the package,json folder, and the javascript for the customer interaction in BAMAZONCUSTOMER.JS

When the customers runs the application a prompt using inquirer pacakage will ask them to choose a product based on the product id. Once they select the item the bamazoncustomer.js queries the MYSQL database to grab the information and return the response based of the customers input.

There are three functions that allows the app to run. I use if staements to determine if the customers order can complete based of the stock quanity of the chosen products. 