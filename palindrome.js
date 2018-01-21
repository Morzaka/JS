function palindrome(str) {

    var newStr = str.replace(/[_\W]/gi, '');

    newStr.toLowerCase();

     function reverse () {
          return newStr.split("").reverse().join("");
    }

    if (newStr.toLowerCase() == reverse().toLowerCase()){
    //     return true;
    }

    return newStr;
}

console.log(palindrome("1 eye for 657sdf(()of 1 eye._"));
