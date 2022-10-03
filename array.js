let arr=new Array();
arr.push(7);
arr.push(6);
arr.push(8);
arr.push(10);
console.log("ArrayInteger:")
console.log(arr);
let fruits=["apple","orange","mango"];
console.log("String Array:")
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}

//arraySort
console.log("Sorted Array:")
arr.sort();
fruits.sort();

console.log(arr);
console.log(fruits);

//reverseArray
arr.reverse();
fruits.reverse();
console.log("Reverse Array:")
console.log(arr);
console.log(fruits);
//forEach Loop
console.log("Using forEach Loop:")
arr.forEach((arr)=>console.log(arr));
arr.pop();
console.log("After Pop operation:"+arr);