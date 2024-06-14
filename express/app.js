const express = require('express');
const path = require('path');
const app = express();

const homeroute = require('./Home.js')
const loginroute = require('./Login.js')

const PORT = 4000;
app.use(express.json());

// app.use('/static', express.static(path.join(__dirname, 'Static File')))

// app.get('/file', (req,res)=> {
//     res.sendFile(path.join(__dirname, '2.png'))
// });

// app.use('/', (req, res) => res.send('<h3>hello world</h3>'));
// app.get('/', (req,res) => {
//     res.status(200).send("This is get request.")
// })
// app.get('/hello', (req,res) => {
//     res.status(200).send("This is Hello ...")
// })

// app.post('/' , (req,res) => {
//     const  {name} = req.body;
//     res.send(`Welcome ${name} happy Onboarding`)
// })

app.use('/', homeroute);
app.use('/',loginroute);

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
})

