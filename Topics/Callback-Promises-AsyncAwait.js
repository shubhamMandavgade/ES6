//Synchronous
function JavaScriptFun(){
    console.log("1st statement")
    console.log("2nd statement")
    console.log("3rd statement")
    console.log("nth statement")
}
JavaScriptFun();



//Problem-1 when we use async javascript methods
function AsyncOperation(string){
    setTimeout(() => {
        console.log("Get data from server")
    }, 8000);
    console.log("Display Data")
  }

  AsyncOperation();

//Problem-2 when we use async javascript methods  
  /*function printString(string){
    setTimeout( //Asynchronous function
      () => {
        console.log(string)
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }

  function printAll(){
   printString("A")
    printString("B")
    printString("C")
  }
  printAll()
*/

//Avoid above problem using callback 

/*function printString(string, callback){
    setTimeout(
      () => {
        console.log(string)
        callback()
      }, 
      Math.floor(Math.random() * 100) + 1
    )
  }
  function printAll(){
    printString("A", () => {
      printString("B", () => {
        printString("C", () => {
        })
      })
    })
  }
  printAll()
*/

/*The problem with callbacks is it creates something called “Callback Hell.”
   Basically, you start nesting functions within functions within functions, and it starts to get really hard to read the code
*/


/*A Promise represents something that is eventually fulfilled. 
A Promise can either be rejected or resolved based on the operation outcome.

ES6 Promise is the easiest way to work with asynchronous programming in JavaScript. 
Asynchronous programming includes the running of processes individually from the main thread 
and notifies the main thread when it gets complete.

Pending - It is the initial state of each Promise. It represents that the result has not been computed yet.

Fulfilled - It means that the operation has completed.

Rejected - It represents a failure that occurs during computation.
*/
//This is the object, which will give us something in the future. That may be resolve or reject.
//Promise chaining

let promise = new Promise((resolve, reject) => {
    let a = 3;
    if (a == 3) {
        setTimeout(() => {
            resolve("Success");
        }, 8000);
    } else {
        setTimeout(() => {
        reject("Failed");
    }, 8000);

    }
})

promise.then((message) => {
    console.log("It is then block. The message is: " + message)
}).catch((message) => {
    console.log("It is Catch block. The message is: " + message)
})


var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('hello world');
    }, 2000);
});

promise2.then(function (data) {
    console.log(data);
});


//Async await
function printString(string){
    setTimeout( //Asynchronous function
      () => {
        console.log(string)
      }, 
    )
  }
async function printAll(){
    await printString("A")
    await printString("B")
    await printString("C")
  }
  printAll()