function Maybe(value){
  function isNothing(){
    return value === undefined || value === null 
  }
  return {
    map : function(fun) {
      return isNothing() ? Maybe(value) : Maybe(fun(value))
    },
    valueOf : () => value ,
    orElse : function(defalutstring){
      if(isNothing()){
        return Maybe(defalutstring)
      }
      return this
    }
  }
}
const appendHi = str => str + ' kiddie'
const toupper = str => str.toUpperCase()
const monad = Maybe()
console.log(monad.map(toupper).map(appendHi).orElse('default string').valueOf())