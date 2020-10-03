//The rest parameter allows us to represent an indefinite number of arguments as an array. 
function show(...args){
    let sum = 0;
    for(let i of args){
        sum+=i;
    }
    console.log(sum);
}

show(10,20,30,39);

//Rest Parameters and Destructuring:- Destructuring means to break down a complex structure into simpler parts.

let perInfo = ['Shubham','Mandavgade',23,8855908345,'sdm@gmail.com'];
var [Fname,Lname,...cont] = perInfo;
console.log(Fname);
console.log(Lname);
console.log(cont);

//rest parameter should be last parameter
function f(x, ...y) {
    // y is an Array
    return x * y.length;
  }
  f(3, "hello", true) == 6