// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
const reservations = [
  {
    routeName: "tableone",
    name: "user",
    id: "userId",
    email: "test@test.com",
    phoneNumber: "555-555-5555"
  },
  {
    routeName: "tabletwo",
    name: "user",
    id: "userId",
    email: "test@test.com",
    phoneNumber: "555-555-5555"
  },
  {
    routeName: "tablethree",
    name: "user",
    id: "userId",
    email: "test@test.com",
    phoneNumber: "555-555-5555"
  }
];

const waitingList = [
    {
        routeName: "tablesix",
        name: "user",
        id: "userId",
        email: "test@test.com",
        phoneNumber: "555-555-5555" 
    }
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all characters
app.get("/api/reservations", function(req, res) {
  return res.json(reservations);
});

// THIS WOULD SHOW AN INDIVIDUAL RESERVATION IF WE SET IT UP THAT WAY!
// Displays a single character, or returns false
// app.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);
//   console.log(req.params)

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// Create New Reservation - takes in JSON input
app.post("/api/reservations", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  // newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
// THIS IS WHERE WE SHOULD PUT THE LOGIC FOR PUSHING RESERVATIONS INTO THE WAITLIST 
// WHEN THE TABLES ARE FULL

  console.log(newReservation);

  reservations.push(newReservation);

  res.json(newReservation);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: http://localhost: " + PORT);
});
