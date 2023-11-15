const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const fs = require("fs");
const path = require("path");

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// Connect to mongodb
mongoose.connect(process.env.MONGO_URI);

//Connect to the database
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  {
    flags: "a",
  }
);

// Use morgan middleware
app.use(morgan("combined", { stream: accessLogStream }));

// ################## Routes start ####################//

app.use("/employee", require("./routes/EmployeeRoutes"));
app.use("/office", require("./routes/OfficeRoutes"));
app.use("/auth", require("./routes/AuthRoutes"));
app.use("/agent", require("./routes/AgentRoutes"));
// ################## Routes end ####################//

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export app
module.exports = app;

// End of file
