const express = require('express');
const morgan = require('morgan'); // adding third party
const path = require('path'); // no need to npm install
const bodyParser = require('body-parser');

const server = express();

server.use(bodyParser.json());

server.get('/', function(req, res) { // the homies
    res.status(200).send('<h2>Home Page</h2>');
});

server.get('/about', function(req, res) { // the homies
    res.status(200).send('<h2>About Page</h2>');
});

server.get('/hobbits', function(req, res) { // the homies
    res.status(200).send('<h2>Hobbits Page</h2>');
});

//POST /hobbits { name: Sam } => Hello Sam!
server.post('/hobbits', function(req, res) {
    // postman
    const { name } = req.body;
    res.send(`Hello ${name}!`);
});

// server.use(morgan('short'));
// ./public \public
// const staticAssests = path.resolve(__dirname, 'public');
// server.use(express.static(staticAssests));
// server.use(atGate, auth, inside);

const port = 9000;
server.listen(port, function() {
    console.log(`I see you on port ${port}`);
});

function atGate(request, response, next) {
    console.log('At the gate, waiting for password');
    next();
}

function inside(req, res, next) {
    console.log('Welcome to the Mines of Moria!');
    res.send("We're safe now.... not!");
}

function auth(req, res, next) {
    console.log(`password is ${req.url}`);
    if (req.url === '/mellon') {
        next();
    } else {
        msg = 'You shall not pass!';
        res.send(msg);
    }
}