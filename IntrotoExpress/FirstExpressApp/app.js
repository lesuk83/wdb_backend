const express = require("express");
const app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
    res.send("Goodbye!");
});

//  "/dog" => "Woof!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog")
    res.send("Woof!");
});

// Tell Express to listen for requests (start server)
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
});
    