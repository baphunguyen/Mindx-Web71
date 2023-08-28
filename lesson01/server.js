// import express from "express";
const express = require("express");

const app = express();
const PORT = 8080;

// Server side rendering
// req = request
// res = response
app.get("/mindx", (req, res) => {
  res.send("Hello to our server");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

/*
    Javascript ES6
        + Array methods: map(), filter(), reduce(), find(), findIndex()
            some(), every() (****)

        + arrow function, destructering
*/
