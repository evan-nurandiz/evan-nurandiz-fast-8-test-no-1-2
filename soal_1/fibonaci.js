const fibonacci = (n) =>{
    let n1 = 0, n2 = 1, lastNum = n1 + n2, res = '0'
    
    while(lastNum <= n){
        res += ',' + lastNum.toString()
        n1 = n2
        n2 = lastNum
        lastNum = n1 + n2
    }

    return res
}

console.log(fibonacci(40))