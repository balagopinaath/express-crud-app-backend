const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route.js");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

// Connect Database

mongoose
  .connect(
    "mongodb+srv://admin:admin123@crudapp.lk9my2o.mongodb.net/crudApp?retryWrites=true&w=majority&appName=crudApp"
  )
  .then((res) => {
    console.log("Database is connected");
    app.listen(3000, () => {
      console.log("server is running");
    });
  })
  .catch((err) => {
    console.log("Database connect failures", err.message);
  });


  
app.get("/", (req, res) => {
  res.send("Hello, from node.js sender");
});
