
console.log("Welcome to Priyanshi Book");



setTimeout(function() {
    console.log("Hello Guys");
},1000);



setTimeout(function() {
    console.log("Welcome to Jungle Book");
},1000);

function greet(f_name , l_name) {
    console.log("Hello " + f_name + " " + l_name);
}

setTimeout( greet , 2000,"Vardan", "Panwar");

 // pass a number to the function
function displayNumbers(numbers){
    console.log(numbers);
}

let arr = [1,2,3,4,5];
displayNumbers(arr);

// display student details using object

function displayStudent(student){
    console.log(student.name);
    console.log(student.age);
}

let student = {
    name : "Vardan",
    age : 20
}
displayStudent(student);

// 