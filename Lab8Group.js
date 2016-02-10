var total = 0;

var shoppingList =[
	{
		item: "Chicken",
		price: 2.00,
		quantity: 2
	},
	{
		item: "garlic",
		price: 0.99,
		quantity: 1
	},
	{
		item: "banana",
		price: 0.49,
		quantity: 5
	},
	{
		item: "sweet potato",
		price: 1.00,
		quantity: 1
	}
]


shoppingList.forEach(function(listAll) {
  total += listAll.price;
  console.log(listAll.item +"....."+ listAll.price);
});

console.log("Total : " +total);
//creating the elements we are going to use

for (var i=0; i<shoppingList.length; i++){

	var listRow = document.createElement("tr");
	var colItem = document.createElement("td");
	var colPrice = document.createElement("td");
	var colQuantity = document.createElement("td");
	var colTotals = document.createElement("td");
	

//adding the data to the element we just created
	colItem.innerText = shoppingList[i].item;
	colPrice.innerText = shoppingList[i].price;
	colQuantity.innerText = shoppingList[i].quantity;
	colTotals.innerText = total;

//appending the elements to the page itself

	listRow.appendChild(colItem);
	listRow.appendChild(colPrice);
	listRow.appendChild(colQuantity);

	var groceries = document.getElementById("groceries");
	groceries.appendChild(listRow);
};

var Totals = document.getElementById("total");
Totals.appendChild(colTotals);





