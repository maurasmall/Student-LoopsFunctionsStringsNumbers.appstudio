// *****************************************************************
/*
Functions - little self-contained programs. 
    
1. DO TOGETHER
Write a program that has a function named Sum that takes three numbers 
sum, returns the answer to the calling 'main' program - which outputs 
the answer to the console. 
*/

function Sum(n1,n2,n3) {
  let functionSum = n1+n2+n3
  return functionSum
}

let num1 = 10
let num2 = 20
let num3 = 30

let answer = Sum(num1, num2, num3)
console.log(`${answer}`)

/*
2. CLASS ACTIVITY
Write a program that uses a function named 'convertFtoC' to convert a 
Farenheit temperature to Celcius. Get the farenheit temperature from the user. 
Output the answer to the console.
The formula is: 
 (FarenheitTemp - 32) times (.5556)
 Hint: 32F is 0C
*/

/*
SCOPE
Global Scope
    In appStudio, global means it works in all forms in the project. 
    Create ONCE at the top of the form.
    Be careful - 
    > when working with others on one project, if they make a 
       global variable named: 'age' and you make a global 
       variable named 'age', you will get unpredictable results
       when their code is added to your project. 
    > if you crate a global variable and then forget (a big program), 
       since it is global, ANYTHING can change it - may not be 
       what you want. 

Local Scope (like private)
    - Only works inside the function.  
    - Only works inside a block of code like a loop.
    - Is not accessible outside of where it was created

// *****************************************************
3. DO TOGETHER
Part 1. run the code below in the debugger: set a break at 
"let answer = num2 + num2  
Set watch for these variables: num1, num2, number1, number2, answer 
Then click Refresh in the browser. 

Step through the code one line at a time - watching the 
num1, num2, number1, number2, answer variables. What happens? 
*/

/*
function doSomeMath(num1, num2) {
   let answer = number1 + number2
   return answer
}

let number1 = 10
let number2 = 20
let mainAnswer = doSomeMath(number1, number2)
console.log(`The answer is ${mainAnswer}, 
                     and num1 and num2 were: ${number1}, ${number2}`)
*/


/* ****************************************
4. CLASS ACTIVITY 
Fix the code below (same as one above) so the scope is correct, and the only variables used in the 
function are local to the function. 
*/

/*
function doSomeMath(num1, num2) {
   let answer = number1 + number2
   return answer
}

let number1 = 10
let number2 = 20
let mainAnswer = doSomeMath(number1, number2)
console.log(`The answer is ${mainAnswer}, 
                     and num1 and num2 were: ${number1}, ${number2}`)
*/
