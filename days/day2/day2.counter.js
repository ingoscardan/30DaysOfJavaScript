export default createCounter = function (n) {
    return function(){
        return n++;
    }
}