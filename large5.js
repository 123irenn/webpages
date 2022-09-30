var a1=parseInt(prompt("Enter first number:"));
var a2=parseInt(prompt("Enter second number:"));
var a3=parseInt(prompt("Enter third number:"));
var a4=parseInt(prompt("Enter fourth number:"));
var a5=parseInt(prompt("Enter five number:"));
if(a1>a2 && a1>a3 && a1>a4 &&a1>a5)
{
    alert(a1+"greater")

}
else if(a2>a1 && a2>a3 && a2>a4 && a2>a5)
{
    alert(a2+"greater");
}
elseif(a3>a1 && a3>a2 && a3>a4 && a3>a5)
{
    alert(a3+"greater")
}
elseif(a4>a1 && a4>a2 && a4>a3 && a4>a5)
{
    alert(a4+"greater")
}
else
{
    alert(a5+"greater")
}

