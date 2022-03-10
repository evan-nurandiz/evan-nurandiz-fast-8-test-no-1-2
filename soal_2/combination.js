const combination = (n,r) => {
    return convert(n)/(convert(r)*(convert(n-r)))
}

const convert = (n) => {
    let value = {}
    for(let i = n; i >= 1; i--){
        if(i == n){
            value['prev'] = i
        }else{
            value['total'] = value['prev'] * i
            value['prev'] = value['total']
        }
    }

    return value['total']
}

console.log(combination(4,2))