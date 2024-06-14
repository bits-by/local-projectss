const express = require('express');
const router = express.Router();

router.get('/home', (req,res) => {
    res.send("this is Home page...")
});

module.exports = router