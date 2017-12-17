var fs = require('fs');
var List = require('./listClass.js');

var movieList = new List();
var customers = new List();

function Customer(name, movie){
    this.name = name;
    this.movie = movie;
}

function readFile(file) {
    fs.readFile(file,'utf8',function(err, data) {
        if(err){
            console.error(err);
        }
        var movies = createArr(data);

        // add movies to the movie list
        for(var i = 0; i < movies.length; i++){
            movieList.append(movies[i]);
        }

    });
}

function createArr(fileData){
    var arr = fileData.split("\n");
    for(var i =0; i < arr.length; i++){
        arr[i] = arr[i].trim();
    }

    return arr;
}

function displayList(list){
    for(list.front(); list.currPos() < list.length(); list.next()){
        if(list.getElement() instanceof Customer){
            console.log(list.getElement() ["name"] + " , " + list.getElement()["movie"]);
        }else{
            console.log(list.getElement());
        }
    }
}

readFile('films.txt');
