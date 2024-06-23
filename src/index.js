const express = require("express");
const ArrayRoute = require("./routes/array.routes.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api", ArrayRoute);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});


