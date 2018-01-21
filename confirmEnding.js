function confirmEnding(str, target) {

    var len = target.length;
    var remainder = str.substring(str.length-len, str.length);

    if(remainder === target){
        return true;
    }

    return false;
}

console.log(confirmEnding("He has to give me a new name", "name"));
