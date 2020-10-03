var user =  {};  // 'object literal' syntax  
var name = new Object();  //'object constructor' syntax  

//Before ES6, the object literal is a collection of name-value pairs. For example
function user(name, division) {  
    return {  
        name: name,  
        division: division  
    };  
}  

//The syntax in ES6 eliminates the duplication when an object property is the same as the name of a local variable. 
//Let's understand this by rewriting the above user() function in ES6.
function user(name, division) {  
    return {  
        name,  
        divison  
    };  
}  

//Similarly, we can construct an object literal by local variables
let uname = 'Anil',  
    udivision = 'First'; 

//initilizing objects below
let user2 = {  
   uname,  
   udivision  
};  
console.log(user2.uname);  
console.log(user2.udivision);

//Merge Object By using Object.assign() method

var obj1 = {1 : "Hello", 2: "World"};   
 var obj2 = { 3 : "Welcome", 4: "to"};  
 var obj3 = { 5 : "javaTpoint"}   
     
 // Using Object.assign()   
var final_obj = Object.assign(obj1, obj2, obj3);   
console.log("merge",final_obj);  

//Object Clonning
let obj = {  
    name: 'Anil',  
    age: 22  
  };  
  
  //These are two methods to clone object.
  let cloneobj = Object.assign({}, obj);  
  let objclone= JSON.parse(JSON.stringify(obj));

  console.log("origional",obj);  
  
  console.log("Clone-1",cloneobj) 
  
  console.log("Clone-2",objclone) 

  cloneobj.age = 32;  
  objclone.age = 43;
    
  console.log(obj);  
  console.log(cloneobj);  
  console.log(objclone);