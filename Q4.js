let starPattern = (num) =>{
    let str="";
    for(let i = 1 ; i <= num ; i ++){
        for(let j = 1 ; j <= i ; j++){
           str = str + ("* ")
        }
        console.log(str);
        str=""                                      // make string empty again
    }
}
console.log("---------------Q4---------------------");
console.log("Star Pattern :-");
starPattern(5);


