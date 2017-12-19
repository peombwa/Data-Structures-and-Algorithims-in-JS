module.exports = function list() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear; // remove all elements
    this.find = find; // find an element position in a list
    this.toString = toString;
    this.insert = insert; // insert after an element
    this.append = append; // add and element to a list
    this.remove = remove; // remove an element from a list
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length; // number of elements in a list
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.length = length;
    this.contains = contains; // determins if an element is in a list
}

function find(element) {
    for(var i = 0; i < this.dataStore.length; i++){
        if(this.dataStore[i] == element){
            return i;
        }
    }
    return -1;
}

function append(element){
    this.dataStore[this.listSize++] = element;
}

function remove(element){
    var foundAt = this.find(element);
    if(foundAt > -1){
        this.dataStore.splice(foundAt, 1);
        this.listSize --;
        return true;
    }
    return false;
}

function length(){
    return this.listSize;
}

function toString() {
    return this.dataStore;
}

function insert(element, after){
    var insertPos = this.find(after);
    if(insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}

function clear(){
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function contains(element){
    for(var i = 0; i < this.dataStore.length; i++){
        if(this.dataStore[i] == element){
            return true;
        }
    }
    return false;
}

// traversing array
function front() {
    this.pos = 0;
}

function end(){
    this.pos = this.listSize - 1;
}

function prev(){
    if(this.pos > 0){
        this.pos --;
    }
}

function next() { 
    if (this.pos < this.listSize) { 
        ++this.pos;
    } 
}

function currPos(){
   return this.pos;
}

function moveTo(position){
    this.pos =position;
}

function getElement(){
    return this.dataStore[this.pos];
}

/*
var names = new list();
names.append("Cynthia");
names.append("Reymond");
names.append("Barbara");
names.append("Clayton");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
names.next();
names.next();
names.next();
names.prev();

for(names.front(); names.currPos() < names.length(); names.next()) { 
    console.log(names.getElement());
}
*/