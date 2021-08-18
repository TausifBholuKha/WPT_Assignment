module.exports.Fac=(n)=>{
    // console.log(n+n)
    if(n==0)
        return 1
    return(n*this.Fac(n-1))
}