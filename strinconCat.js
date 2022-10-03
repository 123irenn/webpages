console.log('Do you like Latte or '.concat('Cappuccino?'));
const helloWorld = 'Hello World!';

console.log(helloWorld.includes('World'));
const index=helloWorld.indexOf('W');
console.log(index);
const str=helloWorld.replace('Hello','Hi');
console.log("--------After replacing------- ");
console.log(str);
console.log("------Searching--------");
console.log(helloWorld.search(/hello/));
console.log("--------------Slicing--------------");
let fruits=['apple orange mango '];
let slice=fruits.slice(5,15);
console.log(slice);

