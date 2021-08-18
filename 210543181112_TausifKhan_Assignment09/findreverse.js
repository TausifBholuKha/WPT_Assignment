module.exports.Reverse=(num)=>{
    let n = Number(num)
    console.log("number = "+n)
    let r=0,rev=0;
    while(n!=0)
    {
        r = n % 10
        rev = rev * 10 + r
        n = Math.floor(n /10)  
    }
    return rev
}