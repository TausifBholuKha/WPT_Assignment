module.exports.prime_num=(n)=>{
    let flag=0;
    for(let i=2;i<n;i++)
    {
        if(n%i==0)
            flag=1
    }
    if(flag==0)
        return "Prime Number"
    else
        return "Not Prime Number"
}