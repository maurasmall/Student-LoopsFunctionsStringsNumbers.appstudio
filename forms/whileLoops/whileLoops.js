    
/* ***************************************
1. DO TOGETHER
Write a while loop that counts by 1, starting at 1, 
and doesn't stop until the user wants to stop. 
eg. 1, 2, 3, 4, ......
Hint: When do you want this loop to stop? You need a stopping 
condition that changes inside the loop.
*/
/*
let i = 1
let doContinue = confirm(`Do you want to stop? OK for Yes or Cancel for No`)
while (doContinue) {
    console.log(`${i}`)
    doContinue = confirm(`Do you want to stop? OK for Yes or Cancel for No`)
   i++
  }
  
*/
/* ***********************************
2. CLASS ACTIVITY
You are entering employee names into a program over and over - but
you don't know ahead of time how many new employees you have to enter until 
you sit down to do it. So you need a program that adds names you enter until 
you are done with all the names you have. 
Use a While loop, an array named 'employees', if/else, and .push(). 
*/
/*
let newEmployee = ""
let employees = ["Joe", "Jim", "Maura", "Kevin"]
let doContinue = confirm(`Do you want to add another employee? OK for Yes or Cancel for No`)
while (doContinue) {
    newEmployee = prompt("Enter new employee name:")
    employees.push(newEmployee)
    doContinue = confirm(`Do you want to add another employee? OK for Yes or Cancel for No`)
  }

console.log(`${employees}`)

*/





