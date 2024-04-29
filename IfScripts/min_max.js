"use strict"

let a = 50;
let b = 60;
let c = 5;
let biggestMessage;
let smallestMessage;

if(a > b && a > c){ 
    biggestMessage = a + " is the biggest" 
}
else if (b > a && b > c ){
    biggestMessage = b +  " is the biggest" 
}
else if (c >a && c > b ){
    biggestMessage = c +  " is the biggest" 
}
 if ( a < b && a < c){
    smallestMessage = a + " is the smallest "
 }
 else if ( b < a && b < c){
    smallestMessage = b + " is the smallest"
 }
 else if ( c < b && c < a){
    smallestMessage = c + " is the smallest"
 }




console.log(biggestMessage);
console.log(smallestMessage);
