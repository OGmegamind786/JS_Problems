let num1 = 23;
let arr1 = [1,2,3,4,5,5,23,2,33];

let findElement = (num , arr) =>{
    if(arr.length===0){
        return null
    }
    for(let i = 0 ; i < arr.length ; i++){
       if(arr[i]=== num)
        return i;
    }
    return null;
    
}
console.log("---------------Q6---------------------");




console.log("The index of " + num1 + " is :- ",findElement(num1,arr1));





// [1,2,3,4,5,5,23,2,33]