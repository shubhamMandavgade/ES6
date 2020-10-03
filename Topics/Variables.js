/*
var Vs let Vs const 

First, let’s compare var and let. The main difference between var and let is that instead of being function scoped, let is block scoped. What that means is that a variable created with the let keyword is available inside the “block” that it was created in as well as any nested blocks. When I say “block”, I mean anything surrounded by a curly brace {} like in a for loop or an if statement.

So let’s look back to our discountPrices function one last time.

function discountPrices (prices, discount) {
  var discounted = []

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}
Remember that we were able to log i, discountedPrice, and finalPrice outside of the for loop since they were declared with var and var is function scoped. But now, what happens if we change those var declarations to use let and try to run it?

function discountPrices (prices, discount) {
  let discounted = []

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i)
  console.log(discountedPrice)
  console.log(finalPrice)

  return discounted
}

discountPrices([100, 200, 300], .5) // ❌ ReferenceError: i is not defined
🙅‍♀️ We get ReferenceError: i is not defined. What this tells us is that variables declared with let are block scoped, not function scoped. So trying to access i (or discountedPrice or finalPrice) outside of the “block” they were declared in is going to give us a reference error as we just barely saw.

var VS let

var VS let

var:
  function scoped
  undefined when accessing a variable before it's declared

let:
  block scoped
  ReferenceError when accessing a variable before it's declared

let VS const

Turns out, const is almost exactly the same as let. However, the only difference is that once you’ve assigned a value to a variable using const, you can’t reassign it to a new value.

let name = 'Tyler'
const handle = 'tylermcginnis'

name = 'Tyler McGinnis' // ✅
handle = '@tylermcginnis' // ❌ TypeError: Assignment to constant variable.
The take away above is that variables declared with let can be re-assigned, but variables declared with const can’t be.

Cool, so anytime you want a variable to be immutable, you can declare it with const. Well, not quite. Just because a variable is declared with const doesn’t mean it’s immutable, all it means is the value can’t be re-assigned. Here’s a good example.

const person = {
  name: 'Kim Kardashian'
}

person.name = 'Kim Kardashian West' // ✅

person = {} // ❌ Assignment to constant variable.
Notice that changing a property on an object isn’t reassigning it, so even though an object is declared with const, that doesn’t mean you can’t mutate any of its properties. It only means you can’t reassign it to a new value.

var VS let VS const

var:
  function scoped
  undefined when accessing a variable before it's declared

let:
  block scoped
  ReferenceError when accessing a variable before it's declared

const:
  block scoped
  ReferenceError when accessing a   variable before it's declared can't be reassigned

Important 

Now the most important question we haven’t answered yet, should you use var, let, or const? The most popular opinion, and the opinion that I subscribe to, is that you should always use const unless you know the variable is going to change. The reason for this is by using const, you’re signalling to your future self as well as any other future developers that have to read your code that this variable shouldn’t change. If it will need to change (like in a for loop), you should use let.

So between variables that change and variables that don’t change, there’s not much left. That means you shouldn’t ever have to use var again.

*/