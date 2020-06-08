let sort = (arr) =>{
    let tmp = [];
    for(let i = 0 ; i < arr.length ; i++){
        for(j = 0 ; j < arr.length ; j++){
            if(arr[j] > arr[j+1]){
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}


console.log("---------------Q10--------------------");

let numbers = [5,2,1,4,3];
console.log(sort(numbers));