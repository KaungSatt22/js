function fact(n)
{
    if(n==0){
        return 1;
    }
    else{
        return n * fact(n-1);
    }
}
onmessage = function(e){
    let result = fact(e.data);
    postMessage(result);
}