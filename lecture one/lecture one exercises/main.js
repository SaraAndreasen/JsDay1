/*Exercise 1

Write a JavaScript program that can find the area of ​​a triangle where the baseline is 7 and the height is 4.

Areal = baseline * ½ * height
 */

let baseline = 7;
let height = 4;
let areal = baseline * 0.5 * height;

console.log("Exercise one result below");
console.warn(areal);


/*Exercise 2

Write a JavaScript program that holds your own:
First name, last name, salary, labor market contributions (8% of your salary), tax, holiday pay (12,5%) in various variables or constants.
The program should show salary before and after tax, in addition you must also be able to see what the person has earned in holiday pay. The main purpose of the exercise is to make calculations and print them out in console in a string.

 For example, "Christian Boesen's salary before tax is DKK 30,000 ..."
 */
 console.log("Excercise two result");

 const myFirstName = "Sara";
 const myLastName = "Andreasen";
 let salary = 38000;

 console.log("Løn før skat:")
 console.warn(myFirstName + " " + myLastName + "'s salary before tax is " + salary);

 console.log("Salary after taxes and :")
 const laborMarket = 0.08;
 const tax = 0.37;
 const holidayPay = 0.125;
 let salaryAfterTax = salary * tax - laborMarket;

 console.warn(salaryAfterTax);

 /*Exercise 3

Write a JavaScript program with a variable that contains a sentence of your own choice and your own name. The program should show where your name is in the sentence and how many characters the sentence contains.

Hint: length, indexOf(“name”)
 */
console.log("Excercise three result");
let sentence = "It's a sunny day outside. Could be a good idea for a walk, Sara thought";
console.warn(sentence);
console.log("Amount of characters in the sentence:");
console.warn(sentence.length);
console.log("Show where the name is in the sentence:")
console.warn(sentence.indexOf("Sara"));


