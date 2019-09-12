const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const publicDirPath = path.join(__dirname, './public');

const app = express();

app.use(express.static(publicDirPath));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extends: true}));


app.get('/', (req, res) => {
    res.render('index');
})

app.post('/', (req, res) => {
    const bmi = Number(req.body.weight) /(Number(req.body.height) * Number(req.body.height));
    console.log(bmi);
    res.send("BMI is " + bmi);
})


app.listen(port, () => {
    console.log("Server is running on port", port);
})
