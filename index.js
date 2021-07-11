import express, { json } from "express";
import path, { dirname } from "path";
import { addFractions, multiplyFractions } from "./operations.js";


const __forntend_dirname = path.join(path.resolve(), 'fractions_frontend')

const app = express();
const port = 3000;

app.use(json());

app.use(express.static(__forntend_dirname));

app.get('/', function(req, res) {
    res.sendFile(path.join(__forntend_dirname, '/index.html'));
});


app.post('/addition', (req, res) => {
    var data = req.body.fractions;
    let result = addFractions(data[0], data[1]);
    res.status(200);
    res.send(result);
    console.log('post received');
});

app.post('/multiplication', (req, res) => {
    var data = req.body.fractions;
    let result = multiplyFractions(data[0], data[1]);
    res.status(200);
    res.send(result);
    console.log('post received');
});


app.listen(port, () => {
    console.log(`fractions-backend is listening at http://localhost:${port}`);
});