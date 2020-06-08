let strReverse =  (str) =>{
    
    revStr="";
    for(let i = str.length - 1 ; i >= 0 ; i--){
        revStr = revStr + str[i];
    }
    return revStr;
}
console.log("---------------Q5---------------------");



let str = "awesome";
console.log("Reverse String of " + str + " is :- "   ,strReverse(str));