function factorialize(num) {

    var arr = [];
    if (num !== 0){
        for(var i = 1; i <= num;i++){
          arr.push(i);
        }
        return arr.reduce(function (previous, current) {
            return previous*current;
        },1);
    } else {
        return 1;
    }
}

console.log(factorialize(5));
