
function reverseString(str) {
    var arr = [];
    arr = str.split('');
    arr = arr.reverse();
    str = arr.join('');
    return str;
}

console.log(reverseString("hello"));