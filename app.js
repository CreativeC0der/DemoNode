const { myDateTime } = require("./datefunc");

const express = require('express');
const app = express();

app.use(express.json())

// // Define a simple GET route
app.get('/test', (req, res) => {
    res.send('Hello, World!');
});

app.post('/test', (req, res) => {
    //Client send data through req object.
    // Server send data through res object .
    console.log(req.body);
    res.send('Hello there');
})

app.put('/test', (req, res) => {
    console.log("Hello from PUT")
    res.send('HEllo from PUT')
})

app.use((req, res) => {
    res.send('error!!')
})

// app.get(endpoint,callback(request,response)); endpoint='/orders','/test'

// // Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
