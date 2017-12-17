var words = ["Hello", "World"];

function showContent(word){
    console.log(word);
    // splice word to array
    var wordArray = word.split("");
    //var reversedWord = [];
    // reverse the array fro highest integer to the lowest
    /*
    for(var i = wordArray.length - 1; i >= 0; i--){
        reversedWord.push(wordArray[i]);
    }
    */
    var reversedWord = wordArray.reverse();
    console.log(reversedWord.join(""));
}

words.forEach(showContent);