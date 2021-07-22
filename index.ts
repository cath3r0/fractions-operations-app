import express, { json } from "express";
import path, { dirname } from "path";
import * as operationsTs from "./operations.js";


const __frontend_dirname = path.join(path.resolve(), 'static')

const app = express();
const port = process.env.PORT || 5000;

app.use(json());

app.use(express.static(__frontend_dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__frontend_dirname, '/index.html'));
});


app.post('/addition', (req, res) => {
    var data = req.body.fractions;
    let result = operationsTs.addFractions(data[0], data[1]);
    res.status(200);
    res.send(result);
});

app.post('/multiplication', (req, res) => {
    var data = req.body.fractions;
    let result = operationsTs.multiplyFractions(data[0], data[1]);
    res.status(200);
    res.send(result);
});

app.post('/division', (req, res) => {
    var data = req.body.fractions;
    let result = operationsTs.divideFractions(data[0], data[1]);
    res.status(200);
    res.send(result);
});

app.post('/substraction', (req, res) => {
    var data = req.body.fractions;
    let result = operationsTs.substractFractions(data[0], data[1]);
    res.status(200);
    res.send(result);
});


app.listen(port, () => {
    console.log(`fractions-backend is listening at http://localhost:${port}`);
});