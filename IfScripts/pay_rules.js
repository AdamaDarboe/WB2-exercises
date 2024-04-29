"use strict"

// what I know over 40
var payRate = 17.30;
var overTimePay= payRate * 1.5;
var hoursWorked = 45;
var pay ;

// if statment 
if  (hoursWorked > 40 ){

    overTimePay = hoursWorked- 40;
    pay = (payRate*40)+ (1.5 *payRate*overTimePay)

}
else if (hoursWorked <= 40 ){
    pay = payRate * hoursWorked
}

console.log("the gross pay is " + pay)



// what I know  under 40
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



// what I know  exactly 40
var payRate = 25.00;
var overTimePay= payRate * 1.5;
var hoursWorked = 40;
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