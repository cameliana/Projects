// This is a travel code welcoming passangers aboard and offering a beverage. Code was created using CodePen
console.log ("Welcome aboard!");

// Function to ask the user for their name
function askName() {
  let name = prompt("What is your name?");
  return name;
}

// Display the welcoming message
console.log("Welcome, " + name + "! We are delighted to have you on board.");

// Function to ask the user for their drink
function askDrink (){
    let drink = prompt("Would you like a water, tea or coffee?").toLowerCase();
  
  if (drink === "water"){
    console.log("Well done for keeping hydrated!");
  } else if (drink === "tea"){
    let optionTea = prompt ("Would you like milk with your tea? yes/no").toLowerCase();
    if (optionTea === "yes"){
        console.log("Enjoy your tea with milk!");
    } else {
        console.log("Here is your cuppa!")
    }

  } else if (drink === "coffee"){
    let optionCoffee = prompt ("Would you like milk or sugar with your tea?").toLowerCase();
    if (optionCoffee === "milk" || optionCoffee === "sugar"){
        console.log("Enjoy your coffee!");
    } else {
        console.log("Here is a regular coffee!");
    }
  } else {
    console.log("Here is a glass of grape juice!🍷");
  }
}