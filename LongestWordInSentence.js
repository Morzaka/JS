function findLongestWord(str) {
    var arr = str.split(" ");
      var longest = arr[0].length;
      var x;
      for (x of arr){
      if (longest < x.length){
          longest = x.length;
      }
    }
    return longest;
}

console.log(findLongestWord("The quick brown fox jumped over dsfssdfthe lazy dog"));
