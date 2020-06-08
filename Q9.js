let findRepeat = (str) => {
    for(let i = 1 ; i < str.length ; i++){
        if(str[0]===str[i]){
            return ("Repeated letter of " + str + " is :- " + str[0]);
        }
    }
    return null;
}
console.log("---------------Q9---------------------");

let strInput = "heythere"
console.log(findRepeat(strInput));