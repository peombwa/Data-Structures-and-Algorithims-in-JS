function grade(){
    this.grades = [];
    this.add = add;
    this.average = average;
}

function add(newGrade){
    this.grades.push(newGrade);
}

function average(){
    var total = 0;
    for(var i = 0; i < this.grades.length; i ++){
        total += this.grades[i];
    }

    return total/this.grades.length;
}


var studentGrade = new grade();

studentGrade.add(100);
studentGrade.add(80);
studentGrade.add(60);
studentGrade.add(10);
studentGrade.add(50);
studentGrade.add(50);

console.log(studentGrade.average());
