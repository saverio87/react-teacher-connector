const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect database
connectDB();

// Initialize Middleware
app.use(express.json({ extended: false }));
// This is a parser, which will look up the content-type in the request headers and parse it into a json object (provided it is application/json)

// Define routes

app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/reviews", require("./routes/api/reviews"));
app.use("/api/profile", require("./routes/api/profile"));

// Serve static assets in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  // serve the HTML file
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// if there is no environment variable set it will connect to port 5000
