function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments, 1);

    function des(val){
        return args.indexOf(val) === -1;
    }
    return arr.filter(des);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
