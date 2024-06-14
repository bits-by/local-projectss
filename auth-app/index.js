const express = require("express");
const app = express();

require('dotenv').congig();
const PORT = process.env.PORT || 4000; //to load data into process object.

app.use(express.json());       //whatever data it need it will pass through body.

require("./config/database").connect();

//route import and mount
const user = require("./routes/user")
app.use("./api/v1", user);

//activation
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})