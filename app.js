
/*Question 1: Variable Declarations and Initialization
Create three variables: productName (string with value "Laptop"), price (number with value 999.99), and inStock (boolean with value true). Console.log all three variables in a single statement.*/
let productName = "Laptop";
let price = 999.99;
let inStock = true;
console.log(productName, price, inStock);

/*Question 2: Mathematical Operations
Calculate and display:

The remainder when 27 is divided by 4
The square of 12 (using exponentiation operator **)
The result of incrementing 8 by 1 using the ++ operator
The result of decrementing 15 by 2 using the -= operator*/

let remainder = 27 % 4;
let square = 12 ** 2;
let incrementedValue = 8;
incrementedValue++;
let decrementedValue = 15;
decrementedValue -= 2;
console.log(`Remainder of 27 divided by 4: ${remainder}`);
console.log(`Square of 12: ${square}`);
console.log(`Incremented value of 8: ${incrementedValue}`);
console.log(`Decremented value of 15 by 2: ${decrementedValue}`); 

/*Question 3: String Concatenation and Case Conversion
Create two string variables: firstName = "alex" and lastName = "SMITH". Concatenate them with a space, then convert the result to proper case (first letter uppercase, rest lowercase). Also find the total length of the full name.*/

let firstName = "alex";
let lastName = "SMITH";
let fullName = firstName + " " + lastName;
let properCaseFullName = fullName.charAt(0).toUpperCase() + fullName.slice(1).toLowerCase();
let fullNameLength = fullName.length;
console.log(properCaseFullName);
console.log(`Total length of full name: ${fullNameLength}`);

/*Question 4: if-else Conditional Logic
Write an if-else statement that checks a temperature variable. If temperature is above 30, console.log "Hot day". If between 20 and 30 (inclusive), console.log "Pleasant day". Otherwise, console.log "Cold day". Test with temperature = 25.*/
let temperature = 25;
if (temperature > 30) {
    console.log("Hot day");
} else if (temperature >= 20 && temperature <= 30) {
    console.log("Pleasant day");
} else {
    console.log("Cold day");
}

/*Question 5: Comparison Operators
Create three comparison operations:

Check if 15 is strictly equal to "15"
Check if 20 is greater than 15 AND less than 25
Check if 10 is not equal to 10 OR 5 is greater than 3*/

let isStrictlyEqual = 15 === "15";
let isBetween = 20 > 15 && 20 < 25;
let isNotEqualOrGreater = 10 !== 10 || 5 > 3;

console.log(`Is 15 strictly equal to "15"? ${isStrictlyEqual}`);
console.log(`Is 20 greater than 15 AND less than 25? ${isBetween}`);
console.log(`Is 10 not equal to 10 OR is 5 greater than 3? ${isNotEqualOrGreater}`);

/*Question 6: Array Manipulation - Basics
Create an array colors with values ["red", "green", "blue"]. Then:

Add "yellow" to the end
Remove the first element
Insert "purple" at index 1
Console.log the final array and its length*/

let colors = ["red", "green", "blue"];
colors.push("yellow");
colors.shift();
colors.splice(1, 0, "purple");
console.log(colors);
console.log(`Length of colors array: ${colors.length}`);

/*Question 7: Array Manipulation - splice()
Start with array fruits = ["apple", "banana", "cherry", "date", "elderberry"]. Use splice() to:

Remove "cherry"
Replace "date" with "dragonfruit"
Extract the middle 3 elements into a new array*/

let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.splice(2, 1);
fruits.splice(2, 1, "dragonfruit");
let middleFruits = fruits.slice(1, 4);
console.log(fruits);
console.log(middleFruits);

/*Question 8: for Loop - Number Sequence
Write a for loop that prints numbers from 1 to 10, but skips number 5 using continue, and stops at 8 using break. Also calculate the sum of all printed numbers.*/
let sum = 0;
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    if (i === 8) {
        break;
    }
    console.log(i);
    sum += i;
}
console.log(`Sum of numbers: ${sum}`);

/*Question 9: Nested for Loop - Pattern
Write nested for loops to create this pattern:

*
**
***
****
******/

for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*";
    }
    console.log(pattern);
}

/*Question 10: String Methods - Search and Extract
Given text = "The quick brown fox jumps over the lazy dog":

Find the position of "fox"
Extract "brown fox" using substring/slice
Check if the text contains "dog"
Get the character at position 10*/

let text = "The quick brown fox jumps over the lazy dog";
let positionOfFox = text.indexOf("fox");
let extractedText = text.slice(10, 19);
let containsDog = text.includes("dog");
let charAtPosition10 = text.charAt(10);

console.log(`Position of "fox": ${positionOfFox}`);
console.log(`Extracted text: ${extractedText}`);
console.log(`Does the text contain "dog"? ${containsDog}`);
console.log(`Character at position 10: ${charAtPosition10}`);

/*Question 11: String Replacement
Given sentence = "I love JavaScript and JavaScript is awesome":

Replace the first "JavaScript" with "coding"
Replace ALL "JavaScript" with "JS"
Replace "awesome" with uppercase "AWESOME"*/

let sentence = "I love JavaScript and JavaScript is awesome";
let replacedFirst = sentence.replace("JavaScript", "coding");
let replacedAll = sentence.replaceAll("JavaScript", "JS");
let replacedAwesome = sentence.replace("awesome", "AWESOME");

console.log(`Replaced first "JavaScript": ${replacedFirst}`);
console.log(`Replaced all "JavaScript": ${replacedAll}`);
console.log(`Replaced "awesome": ${replacedAwesome}`);

/*Question 12: Number Rounding and Formatting
Given num = 123.456789:

Round to 2 decimal places
Round to nearest integer
Get the floor value
Get the ceiling value
Format to show exactly 4 decimal places*/

let num = 123.456789;
let roundedTwoDecimals = num.toFixed(2);
let roundedNearestInteger = Math.round(num);
let floorValue = Math.floor(num);
let ceilingValue = Math.ceil(num);
let formattedFourDecimals = num.toFixed(4);

console.log(`Rounded to 2 decimal places: ${roundedTwoDecimals}`);
console.log(`Rounded to nearest integer: ${roundedNearestInteger}`);
console.log(`Floor value: ${floorValue}`);
console.log(`Ceiling value: ${ceilingValue}`);
console.log(`Formatted to 4 decimal places: ${formattedFourDecimals}`);

/*Question 13: Random Number Generation
Generate:

A random integer between 1 and 100 (inclusive)
A random decimal between 0 and 1 with 3 decimal places
A random number between 50 and 75 (inclusive)*/

let randomInteger = Math.floor(Math.random() * 100) + 1;
let randomDecimal = Math.random().toFixed(3);
let randomBetween50And75 = Math.floor(Math.random() * (75 - 50 + 1)) + 50;

console.log(`Random integer between 1 and 100: ${randomInteger}`);
console.log(`Random decimal between 0 and 1: ${randomDecimal}`);
console.log(`Random number between 50 and 75: ${randomBetween50And75}`);

/*Question 14: Type Conversion
Perform these conversions:

Convert string "123" to number
Convert string "45.67" to decimal (float)
Convert number 789 to string
Check the type of "true" after converting to boolean*/

let stringToNumber = Number("123");
let stringToDecimal = parseFloat("45.67");
let numberToString = String(789);
let booleanType = typeof Boolean("true");

console.log(`Converted "123" to number: ${stringToNumber}`);
console.log(`Converted "45.67" to decimal: ${stringToDecimal}`);
console.log(`Converted 789 to string: ${numberToString}`);
console.log(`Type of "true" after converting to boolean: ${booleanType}`);

/*Question 15: Date and Time Operations
Create a Date object for the current time and:

Extract the year, month (0-11), and day
Get the hours in 24-hour format
Format it as "YYYY-MM-DD"
Create a specific date for December 25, 2024*/

let currentDate = new Date();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let day = currentDate.getDate();
let hours = currentDate.getHours();
let formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
let specificDate = new Date(2024, 11, 25);

console.log(`Current date: ${formattedDate}`);
console.log(`Specific date: ${specificDate.toDateString()}`);

/*Question 16: Function - Basic Calculator
Write a function calculate that takes two numbers and an operator (+, -, *, /) as parameters and returns the result. Handle division by zero by returning "Error: Division by zero".*/

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return console.log("Error: Division by zero");
            }
            return num1 / num2;
        default:
            return console.log("Error: Invalid operator");
    }
}

console.log(calculate(10, 5, '+'));
console.log(calculate(10, 5, '-'));
console.log(calculate(10, 5, '*'));
console.log(calculate(10, 0, '/'));

/*Question 17: Function - Local vs Global Variables
Create a global variable globalCounter = 0. Write a function incrementCounter that declares a local variable with the same name and increments it, while also incrementing the global variable. Show the difference after calling the function twice.*/

let globalCounter = 0;

function incrementCounter() {
    let localCounter = 0;
    localCounter++;
    globalCounter++;
}

console.log(`Global counter before calling function: ${globalCounter}`);
incrementCounter();
console.log(`Global counter first call: ${globalCounter}`);
incrementCounter();
console.log(`Global counter second call: ${globalCounter}`);

/*Question 18: switch Statement - Day of Week
Write a switch statement that takes a number (0-6) and returns the corresponding day name (0=Sunday, 1=Monday, etc.). Include a default case for invalid numbers.*/

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Error: Invalid day number";
    }
}

console.log(getDayName(0));
console.log(getDayName(3));
console.log(getDayName(6));
console.log(getDayName(7));

/*Question 19: while Loop - Countdown
Write a while loop that starts at 10 and counts down to 1, printing each number. Then print "Blast off!". Also calculate the factorial of 5 using a while loop.*/

let countdown = 10;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
}
console.log("Blast off!");

let factorial = 1;
let number = 5;
while (number > 1) {
    factorial *= number;
    number--;
}
console.log(`Factorial of 5: ${factorial}`);

/*Question 20: do...while Loop - User Input Simulation
Create a do...while loop that simulates asking for a password. Start with enteredPassword = "" and keep "asking" (incrementing a counter) until enteredPassword === "secret123" or 5 attempts are made.*/

let enteredPassword = "";
let attempts = 0;
do {
    attempts++;
    enteredPassword = attempts === 3 ? "secret123" : "wrongPassword";

} while (enteredPassword !== "secret123" && attempts < 5);
if (enteredPassword === "secret123") {
    console.log("Access granted!");
} else {
    console.log("Access denied! Too many attempts.");
}

/*Question 21: Array Methods with for Loop
Given numbers = [12, 45, 78, 23, 56, 89, 34]:

Use a for loop to find the maximum value
Use a for loop to calculate the average
Create a new array with only numbers greater than 50
Reverse the array without using reverse() method*/

let numbers = [12, 45, 78, 23, 56, 89, 34];

let maxValue = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxValue) {
        maxValue = numbers[i];
    }
}
let sumOfNumbers = 0;
for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
}

let average = sumOfNumbers / numbers.length;

let greaterThanFifty = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 50) {
        greaterThanFifty.push(numbers[i]);
    }
}
let reversedArray = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArray.push(numbers[i]);
}

console.log(`Maximum value: ${maxValue}`);
console.log(`Average value: ${average}`);
console.log(`Numbers greater than 50: ${greaterThanFifty}`);
console.log(`Reversed array: ${reversedArray}`);

/*Question 22: Event Handling Simulation
Create a function handleClick that:

Gets a value from an input field with id "username"
Checks if it's empty and shows an alert if so
Otherwise, displays "Welcome, [username]!" in a paragraph with id "greeting"
Resets the input field after greeting*/

function handleClick() {
    let usernameInput = document.getElementById("username");
    let greetingParagraph = document.getElementById("greeting");
    let username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter a username.");
    } else {
        greetingParagraph.innerText = `Welcome, ${username}!`;
        usernameInput.value = "";
    }
}

/*Question 23: Form Validation Function
Write a function validateForm that:

Takes email and password as parameters
Returns true if email contains "@" and password length ≥ 8
Otherwise returns false with specific error messages
Test with multiple test cases*/

function validateForm(email, password) {
    if (!email.includes("@")) {
        console.log("Error: Invalid email address.");
        return false;
    }
    if (password.length < 8) {
        console.log("Error: Password must be at least 8 characters long.");
        return false;
    }
    return true;
}

console.log(validateForm("hassan@example.com", "password123"));
console.log(validateForm("hassanexample.com", "password123"));
console.log(validateForm("hassan@example.com", "pass"));

/*Question 24: Temperature Converter
Create a function convertTemperature that:

Takes a temperature and a unit ("C" or "F") as parameters
Converts Celsius to Fahrenheit: (C × 9/5) + 32
Converts Fahrenheit to Celsius: (F - 32) × 5/9
Returns the converted value with 1 decimal place*/

function convertTemperature(temp, unit) {
    if (unit === "C") {
        return ((temp * 9/5) + 32).toFixed(1);
    } else if (unit === "F") {
        return ((temp - 32) * 5/9).toFixed(1);
    }
    return "Error: Invalid unit. Use 'C' or 'F'.";
}

console.log(`${convertTemperature(25, "C")}°F`);
console.log(`${convertTemperature(77, "F")}°C`);
console.log(convertTemperature(100, "X"));

/*Question 25: Shopping Cart Array Operations
Create an array cart = [] and write these functions:

addItem(name, price): Adds item object to cart
removeItem(name): Removes item by name
calculateTotal(): Returns sum of all item prices
applyDiscount(percent): Applies discount to total
listItems(): Returns array of just item names*/

let cart = [];

function addItem(name, price) {
    cart.push({ name, price });
}

function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
}

function calculateTotal() {
    let total = 0;

    for (let item of cart) {
        total += item.price;
    }

    return total;
}

function applyDiscount(percent) {
    let total = calculateTotal();
    return total - (total * (percent / 100));
}

function listItems() {
    let items = [];

    for (let item of cart) {
        items.push(item.name);
    }

    return items;
}

addItem("Laptop", 999.99);
addItem("Mouse", 49.99);
console.log(`Cart items: ${listItems()}`);
console.log(`Total before discount: $${calculateTotal().toFixed(2)}`);
console.log(`Total after 10% discount: $${applyDiscount(10).toFixed(2)}`);
removeItem("Mouse");
console.log(`Cart items after removal: ${listItems()}`);
console.log(`Total after removal: $${calculateTotal().toFixed(2)}`);