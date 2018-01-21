function titleCase(str) {
    var arr = str.toLowerCase().split(" ");
    var newArr = [];
    arr.forEach(function (val, i) {
        newArr.push(val.charAt(0).toUpperCase()+val.substr(1));
    });
    return newArr.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
