const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())
app.use(express.json());

let queue = [];

app.post('/data', (req, res) => {
    const data = req.body.sendData;
    if (data) {
        queue.push(data);
        return res.send('Success');
    }
    return res.status(400).send('No data found');
});



app.get('/data', (req, res) => {
    if (queue.length > 0) {
        let removedData = queue.shift();
        return res.send(removedData);
    }
    return res.status(404).send('Queue is empty');
});

app.listen(5000, function () {
    console.log("Server is running on port 5000");
});
