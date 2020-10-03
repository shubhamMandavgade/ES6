//Expression function
var myfun1 = function show(){
    console.log("Expression function");
}

//Anonymous function
var myfun2 = function(){
    console.log("Anonymous function");
}

//Arrow function
var myfun3 = () =>{
    console.log("It is an Arrow Function");    
}

myfun1();  
myfun2();  
myfun3();  

//Optional parentheses for the single parameter
var print = x =>{
    console.log(x);
}
print(60);

//Optional braces for single statement and the empty braces if there is not any parameter required.
var braces = () => console.log("Yesss");
braces();

//Arrow Function with Parameters
var ShowNum = (x,y,z)=>{
    console.log("x: "+x +" y: "+y +" z: "+z)
}
ShowNum(123,134,124);

//Arrow function with default parameters
var showme = (a, b=200) => {
    console.log(a + " " + b);
}
showme(100);
