// let add = function (x, y) {
// 	return x + y;
// };

// console.log(add(10, 20));

//use arraw function
// let add = (x, y) => x + y;

// console.log(add(10, 20)); 
let add = (x, y) => { return x + y; };
console.log(add(10, 20)); 
console.log(typeof add); 

let numbers = [4,2,6];
numbers.sort(function(a,b){ 
    return b - a; 
});
console.log(numbers);
// single parameter
let names = ['John', 'Mac', 'Peter'];
let lengths = names.map(name => name.length);

console.log(lengths);
//JavaScript arrow functions and object literal

let setColor = function (color) {
    return {value: color}
};

let backgroundColor = setColor('Red');
console.log(backgroundColor.value); 