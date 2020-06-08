let fact = (num) => 
{
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--)
     {
      num = num * i;
    }
    return num;
}
console.log("---------------Q2---------------------");

let x = 5;

console.log("Factorial of " + x + " is :- ", fact(x));