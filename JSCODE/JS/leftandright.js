const left = value => ({
    map(){
        return left.of(value)
    },
    toString : () => value
})
left.of = value => left(value) 
const right = value => ({
    map(fun){
        return right.of(fun(value))
    },
    toString : () => value
})
right.of = value => right(value)
console.log(left.of(3).map().toString())
console.log(right.of(3).map(x=>x+1).map(x=>x*2).toString())
