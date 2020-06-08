
let num = 192;


let digitsum = (num) =>
{
    let strnum = num.toString();
    let sum = 0;
    for(let i = 0 ; i < strnum.length ; i++)
    {
        let number = parseInt(strnum[i]);
        sum = sum + number;
    }
    return sum;
}
console.log("---------------Q3)Method 1------------");

console.log( "Sum of digits of the number " + num + " is ",digitsum(num));




console.log("---------------Q3)method 2------------");

let digitsum1 = (num) =>
{
    let sum = 0;
    while(num>0){
        let x = num % 10;
        sum = sum + x;
        num =Math.floor( num / 10);
    }
    return sum;
}


console.log("Sum of digits of the number " + num + " is ",digitsum1(num));