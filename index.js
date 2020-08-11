/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;
console.log (votingAge);


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let goVote 
if (age => 18) {
    alert('true!');
} else if (age < 18 === 'false') {
    console.log (goVote);
}


//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

var x = "1999";
var x = toInteger();       
("1999") = fromString();
alert (1999);


//Task d: Write a function to multiply a*b 

function multiply(a,b){
    return a*b;
    }



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 


function calculateDogAge(age) {
    var dogYears = 7*42;
    console.log("I am " + dogYears + " years old in dog years!");
}


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function feed (age, pounds) {
    return (age/15 %pounds);
}
    console.log(feed(1,15));


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var userChoice = prompt("Rock, Paper, or Scissors");
var computerChoice = Math.random();

var compchoice = function ()
{
    if (computerChoice <= 0.34)
    {
        return computerChoice = "Rock";
    } 
    else if(computerChoice <= 0.67 && computerChoice >= 0.35)
    {
        return computerChoice = "Paper";
    }
    if (computerChoice >= 0.68)
    {
        return computerChoice = "Scissors";
    }

};

var compare = function (choice1, choice2)
{
    if (computerChoice === "Rock" || "Paper" || "Scissors")
    {
        if (choice1 === choice2)
        {
            return alert("The result is a tie!");
        }

        else if (choice1 === "Rock")
        {
            if (choice2 === "Scissors")
            {
                return alert("Rock crushes Scissors!");
            }
            else if (choice2 === "Paper")
            {
                return alert("Paper covers Rock!");
            }
        }
        if (choice1 === "Scissors")
        {
            if (choice2 === "Rock")
            {
                return alert("Rock crushes Scissors!");
            }
            else if (choice2 === "Paper")
            {
                return alert("Scissors cuts Paper!");
            }
        }
        else if (choice1 === "Paper")
        {
            if (choice2 === "Rock")
            {
                return alert("Paper covers Rock!");
            }
            else if (choice2 === "Scissors")
            {
                return alert("Scissors cuts Paper!");
            }
        }
    }
    else 
    {
        return alert("Please type Rock, Paper, or Scissors next time");
    }
};

return computerChoice();
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

var kilometers = parseInt(prompt("Please enter kilometers:"));
var miles = kilometers / 1.6;
console.log(miles + " Miles");



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function roundit(which){
    return Math.round(which*100)/100
    }
    
    function cmconvert(){
    with (document.cminch){
    feet.value = roundit(cm.value/30.84);
    inch.value = roundit(cm.value/2.54);
    }
    }
    
    function inchconvert(){
    with (document.cminch){
    cm.value = roundit(inch.value*2.54);
    feet.value=roundit(inch.value/12);
    }
    }
    
    function feetconvert(){
    with (document.cminch){
    cm.value=roundit(feet.value*30.48);
    inch.value=roundit(feet.value*12);
    }
    }



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong () {

    var bottles;
    for (counter = 99; counter >= 1; counter = counter - 1) 
    {
        if (counter == 1) {
            bottles = 'bottle';
        } else {
            bottles = 'bottles';
        }
        console.log(counter+" "+bottles+" of beer on the wall.");
        if (counter < 99) {
            console.log("");
            console.log(counter+" "+bottles+" of beer on the wall.");
        }
        console.log(counter+" "+bottles+" of beer.");
        console.log("Take one down.");
        console.log("Pass it around.");
        if (counter == 1) {
            console.log("No bottles of beer on the wall.");
        }
    }

}
 ////////////////////////////////////////////////////////////

 

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
var points = prompt("What is your percentage point total?");

if(points >= 90) {
alert("Your letter grade is an A!");
}
if(points<=89&&points>=80) {
alert("Your letter grade is a B !");
}
if(points<=79&&points>=70) {
alert("Your letter grade is a C !");
}
if(points<=69&&points>=60) {
alert("Your letter grade is a D !");
}
if(points<60) {
alert("Your letter grade is an F !");
}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vowel_count = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vowel_count += 1;
    }
  
  }
  return vowel_count;
}
console.log(vowel_count("I love to play Scrabble"));



/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





