const {Flights} =  require("../models/Flight");
const {v4:uuid} = require("uuid");

// get all flight details
exports.getFlights = async (req,res) => {
    try{
      const flights = Flights;
      res.status(200).json({
        message: "All Flights",
        flights: flights,
      });
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  }

// get a flight detail
exports.getFlight = async (req,res) => {
    try{
      let id = req.params.id;
      const flight = Flights.find((flight) => flight.id === id);
      res.status(200).json({
        message: "Flight found",
        flight:flight,
      });
    } catch (err) {
      res.status(500).json({message: err.message});
    }
  }

// add/book a new flight detail
exports.bookFlight = async (req,res) => {
    try{
      const {title, time, price, date} = await req.body;
      const newFlight = {
        id:uuid(),
        title,
        time,
        price,
        date
      }
      Flights.push(newFlight);
      res.status(201).json({
        message: "flight Created",
        newFlight,
      })
    } catch(err) {
      res.status(500).json({message: err.message}); 
    }
  }

// update/edit flight
exports.updateFlight = async (req,res) => {
    try{
      let id = req.params.id;
      const flight = Flights.find((flight) => flight.id === id);
      const {title, time, price, date} = await req.body;
      flight.title = title;
      flight.time = time;
      flight.price = price;
      flight.date = date;
      res.status(201).json({
        message: "Flight Updated",
        flight:flight,
      })
    } catch(err) {
      res.status(500).json({message: err.message});
    }
  }

// delete flight
exports.deleteFlight = async (req,res) => {
    try{
      let id = req.params.id;
      const flight = Flights.find((flight) => flight.id === id);
      Flights.splice(Flights.indexOf(flight), 1);
      res.status(201).json({
        message: "Flight Deleted",
        flight:flight,
      })
    } catch(err) {
      res.status(500).json({message: err.message});
    }
  }

// exports.example = (req, res) => {
//     console.log("example")
//     res.send("Flight example")
// }


