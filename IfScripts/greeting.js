"use strict"
//what is the time 

let time = 30;
let greeting;


// if statment 

if (time < 10 ){
greeting = "Good Morning!";
}
else if (time < 17){ 
 greeting ="Good day!";
}
else if(time <= 23) {
   greeting = "Good evneing!";
}
else {
    greeting = "error"
}
console.log(greeting)