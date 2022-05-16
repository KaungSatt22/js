const monad = value => ({
    flatmap : f => f(value),
    map(f){
        return this.flatmap(a=>monad.of(f(a)))
    },
    valueOf: () => `${value}`
})
monad.of = function(value){
    return monad(value)
}
console.log(monad(3).map(x=>x+1).map(x=>x*2).valueOf())
