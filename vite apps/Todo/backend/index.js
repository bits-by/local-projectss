//write express boilerplate code.   
//with express.json() middleware.

const express = require('express');
const app = express();

app.use(express.json());

app.post("/todos", function(req, res) {

})
app.get("/todos", function(req, res) {

})
app.put("/todos", function(req, res) {

})

