const prompt = require("prompt-sync")();

var a=parseInt(prompt("Enter the first number:"));
var b=parseInt(prompt("Enter the second number:"));
if(a==b)
{
    console.log(a+"equals to"+b);
}
else if(a>b)
{
    console.log(a+"greater than"+b);

}
else{
    console.log(b+"is greater than"+a);
}