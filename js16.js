// -----PART 1_______


// var Fooditem = function(name, calories, vegan, glutenFree, citrusFree) {
// 	this.name = name
// 	this.calories = calories
// 	this.vegan = vegan
// 	this.glutenFree = glutenFree
// 	this.citrusFree = citrusFree
// }


// Fooditem.prototype.isglutenFree = function(){
// 	if(this.glutenFree === true){
// 		return("gluten free")
// 	} else {
// 		return("not gluten free")
// 	}

// }

// Fooditem.prototype.iscitrusFree = function() {
// 	if(this.citrusFree === true){
// 		return("citrus free")
// 	} else {
// 		return("not citrus free")
// 	}
// }

// Fooditem.prototype.isVegan = function(){
// 		if(this.vegan === true){
// 		return("vegan")
// 	} else {
// 		return("not vegan")
// 	}
// }

// 	Fooditem.prototype.stringify = function() {

// 		console.log("The food is " + this.name + " and it has " + this.calories + " calories " + 
// 		"and is " + this.isVegan() + " and is " + this.isglutenFree() + " and is " + this.iscitrusFree())

// 	}


// var orange = new Fooditem('orange', 100, true, true, false)
// var banana = new Fooditem('banana', 50, true, true, true)
// var pizza = new Fooditem('pizza', 1000, false, false, true)

// console.log(orange)
// console.log(orange.glutenFree)
// orange.stringify()
// banana.stringify()
// pizza.stringify()


// ----- PART 2 -----------


var Drink = function(name, description, price, ingredients){
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients
}

var plates = []

var Plate = function(name, description, price, ingredients, vegan, glutenFree, LactoseFree){
	this.name = name
	this.description = description
	this.price = price
	this.ingredients = ingredients
	this.vegan = vegan
	this.glutenFree = glutenFree
	this.LactoseFree = LactoseFree
	plates.push()

}

var Order = function(plates){
	this.plates = plates
}


var Menu = function(guacGroc,chickenRoll,margarita){
	this.plates = plates
}

var Restaurant = function(name, description, menu){
	this.name = name
	this.description = description
	this.menu = menu
}

var Customer = function(dietaryPreferences){
	this.dietaryPreferences = dietaryPreferences
}



Drink.prototype.stringify = function() {

		console.log("The drink is " + this.name + " and it is " + this.description +   
		" and is " + this.price + " dollars" + " and contains " + this.ingredients)

	}

var margarita = new Drink("Margarita", "a salty treat", 0, ["tequila", "salt", "ice"])

Plate.prototype.stringify = function() {
		console.log("The plate is " + this.name + " and it is " + this.description +   
		" and is " + this.price + " dollars" + " and contains " + this.ingredients)
}

Order.prototype.stringify = function(){
	for (var i = 0; i < 4; i++){
		console.log("The menu includes: " + plates[i])
	}
}

Menu.prototype.stringify = function(){
	for (var i = 0; i < 4; i++){
		console.log("The menu includes: " + plates[i])
	}
}

Restaurant.prototype.stringify = function(){
	console.log("The order is " + this.name + " and it is " + this.description +   
		" and is 2 pesos" + this.menu)
}

Customer.prototype.stringify = function(){
	console.log("Its dietary preferences are " + this.dietaryPreferences)
}


var guacPlate = new Plate('guacGroc', 'creamy goodness served best with a salty treat', 12, ["avacado", "salt", 'tomato', 'onion', 'mashing', 'lime', 'sour cream', "pepper"], true, true, false)
var burritoPlate = new Plate ('chickenRoll', 'poultry in an edible sleeping bag', 5, ['chicken', 'salsa', 'rice', 'queso', 'blackBean', 'jalepeno'], false, false, false)



var ourOrder = new Order([guacPlate, burritoPlate, margarita])

var Choices = new Menu ([guacPlate, burritoPlate, margarita])

var Mexico = new Restaurant('mex\'sShack', 'Max and Ilana\'s TexMex Triflings', Choices)



Mexico.stringify()









