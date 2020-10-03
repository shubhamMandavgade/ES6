class Student{  
    constructor(name, age){  
    this.name = name;  
    this.age = age;    
    }  
    stu() {   
        console.log("The Name of the student is: ", this.name)   
        console.log("The Age of the student is: ",this. age)   
     }   
}  

var stu = new Student('Peter', 22);
stu.stu();  

//Method Overriding and Inheritance -SUPER KEYWORD
'use strict' ;  
class Parent {   
   show() {   
      console.log("It is the show() method from the parent class");  
   }  
}  
class Child extends Parent {   
   show() {  
    super.show();
      console.log("It is the show() method from the child class");  
   }   
}   
var obj = new Child();   
obj.show(); 
 
