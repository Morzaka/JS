function largestOfFour(arr) {

    var max = [];
    var subMax = 0;
    arr.forEach(function (val) {
        val.forEach(function (item) {
        if(item > subMax){
            subMax = item;
        }
        });
        max.push(subMax);
        subMax = 0;
    });

    return max;
}

console.log(largestOfFour([[13, 27, 18, 26],
                           [4, 500, 1, 3],
                           [32, 35, 37, 39],
                           [1000, 1001, 857, 1]]));


/*

    var topIndex = 0;
    var previousValue = max[0];
    max.forEach(function (value, i) {
        if(value > previousValue){
            topIndex = i;
            previousValue = value;
        }
    });

    return arr[topIndex];

*/