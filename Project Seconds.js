//Introduction message
alert("Hello there! I am MathBot 🧮!");
//Ask user for name input and display greeting
const name = prompt("What is your name?");
alert("Nice to meet you, " + name);
//message
alert("Ever wondered how many seconds are in 15 days? 50 or maybe 365? 🤔\n \nYou did not? 😮\nGo on, find out!");
//Ask user for an integer number and calculate how many seconds in the number given. Display message including number of days and total of seconds.
const number = prompt("Type a number: ");
totalSeconds = number*60*60*24;
alert(`In ${number} days there are ` + totalSeconds +` seconds! Now you know! 🎉`);
//Ask user to input their age and calculate how many seconds are in that number 
alert("Let`s find out how many seconds are you in a common year!");
const age = prompt("Insert your age in years:")
ageSeconds = age*31536000
alert(`You are ${ageSeconds} seconds young 🌱 or old 🌲!\n\nYou see, age is just a number!`)