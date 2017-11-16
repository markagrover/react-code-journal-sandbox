const express = require('express');
const PORT = process.env.PORT || 5000;
const todoRoutes = require('./routes/todos');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

// set the debug so we can see the errors in the console.
mongoose.set('debug', true);

// connect to mongodb NOTE: we can name our db anything. this one is 'todo-api'
mongoose.connect('mongodb://localhost/todo-api');
//Body Parser Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

// helper clean routes example ... follow the trail of require()'s
app.use('/api/todos', todoRoutes);

// dirty generic example
app.get('/api/test', (req, res) => {
   res.json({
       data: "Test Passed!"
   });
});

app.listen(PORT, (err) => {
    if(err){
        console.error("Error connection to the server :",err);
    } else {
        console.log("Listening on port "+ PORT);
    }
});
