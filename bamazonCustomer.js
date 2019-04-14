let mysql = require("mysql");
let inquirer = require("inquirer");
let Table = require("cli-table");

// create the connection information for the sql database
let connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon_db"
});

connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id" + connection.threadId);
});

let display = function(){
	let query = "Select * FROM products";
	connection.query(query, function(err, res){
		if(err) throw err;
		let displayTable = new Table ({
			head: ["Item ID", "Product Name", "Catergory", "Price", "Quantity"],
			colWidths: [10,25,25,10,14]
		});
		for(let i = 0; i < res.length; i++){
			displayTable.push(
				[res[i].id,res[i].product_name, res[i].department, res[i].price, res[i].stock_quantity]
				);
		}
		console.log(displayTable.toString());
		purchase();
	});
}

display();

function purchase(){
    inquirer.prompt([
        {
            name: "selectByID",
            type: "input",
            message: "Please enter Product ID Number:",
            filter: Number,
        },
        {
            name:"selectUnits",
            type: "input",
            message: "Pease enter quantity of product needed:",
            filter: Number,
        }
    ]).then(function(answers){
        let productID = answers.selectByID;
        let unit = answers.selectUnits;
        purchaseProduct(productID, unit);
    })
}

function purchaseProduct(productID, unit) {
    connection.query('Select * FROM products WHERE id = ' + productID, function(err,res){
        if (err){
            console.log(err)
        };  
        if (unit <= res[0].stock_quantity) {
            let invoiceTotal = res[0].price * unit;
            console.log("Order Instock!");
            console.log("Order Shipped for: " + unit + " " + res[0].product_name +  " With a final total of: " + invoiceTotal);
            console.log("All sales are final!!")
        } else {console.log("Insufficient Funds!")};
    });
}
