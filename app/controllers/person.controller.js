var persons = {
    person1: {
        firstname: "leeway",
        lastname: "hertz",
        age: 25,
        id: 1
    },
    person2: {
        firstname: "salman",
        lastname: "khan",
        age: 50,
        id: 2
    },
    person3: {
        firstname: "amir",
        lastname: "khan",
        age: 48,
        id: 3
    },
    person4: {
        firstname: "spider",
        lastname: "man",
        age: 30,
        id: 4
    }
}

exports.create = function(req, res) {
var newPerson = req.body;
persons["person" + newPerson.id] = newPerson;
console.log("--->After Post, persons:\n" + JSON.stringify(persons, null, 4));
res.end("Post Successfully: \n" + JSON.stringify(newPerson, null, 4));
};

exports.findAll = function(req, res) {
console.log("--->Find All: \n" + JSON.stringify(persons, null, 4));
res.end("All persons: \n" + JSON.stringify(persons, null, 4));  
};

exports.findOne = function(req, res) {
var person = persons["person" + req.params.id];
console.log("--->Find person: \n" + JSON.stringify(person, null, 4));
res.end( "Find a person:\n" + JSON.stringify(person, null, 4));
};

exports.update = function(req, res) {
var id = parseInt(req.params.id);
var updatedPerson = req.body; 
if(persons["person" + id] != null){
// update data
persons["person" + id] = updatedPerson;

console.log("--->Update Successfully, persons: \n" + JSON.stringify(persons, null, 4))

// return
res.end("Update Successfully! \n" + JSON.stringify(updatedPerson, null, 4));
}else{
res.end("Don't Exist person:\n:" + JSON.stringify(updatedPerson, null, 4));
}
};

exports.delete = function(req, res) {
var deletePerson = persons["person" + req.params.id];
delete persons["person" + req.params.id];
console.log("--->After deletion, person list:\n" + JSON.stringify(persons, null, 4) );
res.end( "Deleted customer: \n" + JSON.stringify(deletePerson, null, 4));
};