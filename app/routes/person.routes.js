module.exports = function(app) {

    var customers = require('../controllers/person.controller.js');

    // Create a new person
    app.post('/api/persons', customers.create);

    // Retrieve all person
    app.get('/api/persons', customers.findAll);

    // Retrieve a single person by Id
    app.get('/api/persons/:id', customers.findOne);

    // Update a person with Id
    app.put('/api/persons/:id', customers.update);

    // Delete a person with Id
    app.delete('/api/persons/:id', customers.delete);
}