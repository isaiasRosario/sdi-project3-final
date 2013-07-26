//alert("JavaScript works!");

// Isaias Rosario
// 7/25/13
// Project 3
// Treasure of Prizes


//JSON Data
var json = {
	"brothers":[
		{
			"name": "Jon",
			"age": 10
		},
		{
			"name": "Bob",
			"age": 11
		},
		{
			"name": "Tom",
			"age": 12
		},
		{
			"name": "Rob",
			"age": 13
		}
	]
};

//Global Variables
var broText = "Brother ";
var prize   = ["Teddy Bear", "RC Car", "Toy Car", "Water Gun"];

//Returned Value from Array Function
var broTotal = listNames(json);


//Array Function with for Loop using JSON data
function listNames(json) {
	for(var i = 0; i < json.brothers.length; i++){
		var bro = json.brothers[i];
		console.log(broText + bro.name + " is " + bro.age + " years old." );
	};
	return json.brothers.length;
};

console.log("There are " +
			broTotal + 
			" brothers with " + 
			broTotal + 
			" prizes to choose from the treasure chest."
			);

console.log("The prizes are a " + 
			prize[0] + 
			", " + 
			prize[1] + 
			", " + 
			prize[2] + 
			" and " + 
			prize[3] + 
			"."
			);

console.log("From youngest to oldest they each choose a prize from the treasure chest.");

// Prize Procedure with Conditionals and Nested Conditionals
var prizeDivision = function (amountEach){
		if(broTotal === prize.length){
			console.log("Since there are " + 
						prize.length + 
						" prizes we get " + 
						amountEach + " prize each once we are done choosing.");
		} else{
			 if(prize.length < broTotal){
				console.log("Aww chucks we can't split the prizes there's not enough!");
			 } else{
		 		console.log("Awesome there's more than enough prizes for us!");
		 	 }
		}
};

prizeDivision(broTotal/prize.length)

// String Function with local variables
function goFirst(name, age){
	var so = "Since "
	console.log(so + 
				name + 
				" is " + 
				age + 
				" years old and the youngest he gets to choose first.");
	return name;
};

// Returned Value form String Function
var firstBro = goFirst(json.brothers[0].name, json.brothers[0].age);

//Boolean Function that Returns a Boolean value
var howManyPrizes = function(n) {
    if (prize.length === 4){
        return true;
    } else {
        return false;
    }
};

var prizeBoolean = howManyPrizes(prize.length);

//Prize Procedure using While Loop and Nested for Loop
var prizePick = function(){
	prizeLeft = 4
	
	while (prizeLeft > 0){
			for(var i = 0; i < json.brothers.length; i++){
				console.log("Cool look what " + 
							json.brothers[i].name + 
							" picked as a prize the " + prize[i] + "!" );
				prizeLeft = prizeLeft - 1
			}		
	}
			console.log("No more prizes left in the treasure chest!");
};

prizePick()

//Object Function with properties with Returning values
var whoWasFirst = function (){
	var jon = { 
		"order": ["1st","2nd", "3rd", "4th" ],
		"age": 10,
		"prize": "Teddy Bear",
		"like": true,
		
		"bothers": [
			{
				"name": "Bob"
			},
			{
				"name": "Tom"
			},
			{
				"name": "Rob"
			}
		],
		
		"brosLeft": function(){ // method accessor
			var totalLeft = json.brothers.length - 1;
			return totalLeft;
		},
		
		"setAge": function(newAge){ // method mutator
			this.age = newAge;
			return newAge;
		}
	}
	
		console.log("Jon was " + 
					jon.order[0] + 
					" and picked the " + 
					jon.prize + 
					" because he was " + 
					jon.age + 
					" years old and it is " + 
					jon.like + 
					" that he likes it. The other " + 
					jon.brosLeft() + " brothers were also happy with their prizes.");
					
		console.log("If Jon was " + jon.setAge(14) + " he would of been last to pick.");
				
		return jon.order;
		return jon.borothers;
};

var getWhoWasFirst = whoWasFirst();



