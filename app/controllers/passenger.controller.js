var Passenger = require('../models/passenger.model.js');

exports.create = function(req, res) {
    // Create and Save a new Passenger with Seat
    if(!req.body.seat) {
        res.status(400).send({message: "Passenger can not be empty"});
    }
    var passenger = new Passenger({name: req.body.name || "Undefined Passenger", seat: req.body.seat});

    passenger.save(function(err, data) {
        console.log(data);
        if(err) {
            console.log(err);
            res.status(500).send({message: "Some error occurred while creating the Passenger."});
        } else {
            res.send(data);
        }
    });
};

exports.findAll = function(req, res) {
    // Retrieve and return all passengers from the database.
    Passenger.find(function(err, passengers){
        if(err) {
            res.status(500).send({message: "Some error occurred while retrieving Passenger."});
        } else {
            res.send(passengers);
        }
    });
};

exports.findOne = function(req, res) {
    // Find a single Passenger with a passengerId
    Passenger.findById(req.params.passengerId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve passenger with id " + req.params.passengerId});
        } else {
            res.send(data);
        }
    });
};

exports.update = function(req, res) {
    // Update a passanger identified by the passengerId in the request
    Passenger.findById(req.params.passengerId, function(err, passenger) {
        if(err) {
            res.status(500).send({message: "Could not find a passenger with id " + req.params.passengerId});
        }

        passenger.name = req.body.name;
        passenger.seat = req.body.seat;

        passenger.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update passenger with id " + req.params.passengerId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a passenger with the specified passengerId in the request
    Passenger.remove({_id: req.params.passengerId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete passenger with id " + req.params.id});
        } else {
            res.send({message: "Passenger deleted successfully!"})
        }
    });
};