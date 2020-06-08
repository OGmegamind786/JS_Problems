let addElement = (arr) => {
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log("---------------Q7---------------------");
arrInput = [1,2,3,4,10];

console.log("Sum of all the elements of array :- " + "(" + arrInput + ")" +" is :- ",addElement(arrInput));