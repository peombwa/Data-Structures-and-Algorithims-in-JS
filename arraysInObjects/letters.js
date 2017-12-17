function letter(){
    this.letters = [];
    this.add = add;
    this.displayWord = displayWord;
}

function add(newLetter) {
    this.letters.push(newLetter);
}

function displayWord(){
    return this.letters.join("");
}

var hello = new letter();
hello.add("H");
hello.add("e");
hello.add("l");
hello.add("l");
hello.add("0");

console.log(hello.displayWord());