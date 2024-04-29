"use strict"

// what I know 
var payRate = 12.50;
var overTimePay= payRate * 1.5;
var hoursWorked = 20;
var pay ;

// if statment 
if  (hoursWorked > 40 ){

    overTimePay = hoursWorked- 40;
    pay = (payRate*20)+ (1.5 *payRate*overTimePay)
}
else if (hoursWorked <= 40 ){
    pay = payRate * hoursWorked
}
console.log("the gross pay is " + pay)