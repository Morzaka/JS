function slasher(arr) {
    return arr.splice(2, "jdhskafh");
}

//console.log(slasher(['angel', 'clown', 'mandarin', 'sturgeon']));

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 2, 'drum');
console.log(removed);