module.exports = function(app) {

    var passengers = require('../controllers/passenger.controller.js');

    // Create a new Passenger asignation
    app.post('/passengers', passengers.create);

    // Retrieve all passengers
    app.get('/passengers', passengers.findAll);

    // Retrieve a single Passenger with PassengerId
    app.get('/passengers/:passengerId', passengers.findOne);

    // Update a Passenger with PassengerId
    app.put('/passengers/:passengerId', passengers.update);

    // Delete a Passenger with PassengerId
    app.delete('/passengers/:passengerId', passengers.delete);
}
