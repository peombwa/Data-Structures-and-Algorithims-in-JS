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
        // read movies
        var movies = createArr(data);

        // add movies to the movie list
        for(var i = 0; i < movies.length; i++){
            movieList.append(movies[i]);
        }

        console.log("Available movies : \n");
        // display list
        displayList(movieList);

        // check out
        checkOut("Peter","18. The Matrix",movieList,customers);

        console.log("Customers details : \n");
        // display list
        displayList(customers);

    });
}

function createArr(fileData){
    var arr = fileData.split("\n");
    for(var i =0; i < arr.length; i++){
        arr[i] = arr[i].trim();
    }

    return arr;
}

// displays movie
function displayList(list){
    for(list.front(); list.currPos() < list.length(); list.next()){
        if(list.getElement() instanceof Customer){
            console.log(list.getElement() ["name"] + " , " + list.getElement()["movie"]);
        }else{
            console.log(list.getElement());
        }
    }
}

// checks out movie
function checkOut(name, movie, filmList, customerList){
    if(filmList.contains(movie)){
        // get customer
        var c = new Customer(name, movie);
        customerList.append(c);
        filmList.remove(movie);
    }else{
        console.error(movie + " not available");
    }
}

readFile('list\\films.txt');
