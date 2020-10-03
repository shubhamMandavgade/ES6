
//the spread operator allows us to insert another array within an initialized array.
let colors = ['Red', 'Yellow'];  
let newColors = [...colors, 'Violet', 'Orange', 'Green'];  
console.log(newColors);  
//Concatenating arrays
let perInfo = ['Shubham','Mandavgade'];
let contInfo = [...perInfo,8855908345,'sdm@gmail.com'];
console.log(contInfo);
//Copying an array....It means that the operator can do a shallow copy instead of a deep copy.
let items = ['1','Pen','cello'];
let copyItem = [...items];
copyItem.push('10');
console.log(copyItem);
console.log(items);
//Convert String into Char
let str = [...'Shubham'];
console.log(str);
// Pass each elem of array as argument
function f(x, y, z) {
    return console.log(x + y + z);
  }
  f(...['a','b','c'])