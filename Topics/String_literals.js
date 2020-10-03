//In template literals, there is no need to use \n because string ends only when it gets backtick(`) character.
// Without template literal   
console.log('Without template literal \nmultiline string');   
    
// With template literal   
console.log(`Using template literal  
multiline string`);  

//String Interpolation
var name = 'World';  
var cname = 'javaTpoint';  
console.log(`Hello, ${name}!  
Welcome to ${cname}`); 

var x = 10;  
var y = 20;  
console.log(`The product of the variables ${x} and ${y} is:  
${x*y}`);  
