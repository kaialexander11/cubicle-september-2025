//console.log('Hello from Express!');

const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const expressConfig = require('./config/expressConfig.js');
const handlebarsConfig = require('./config/handlebarsConfig.js');

const app = express();

expressConfig(app);
handlebarsConfig(app);

// This line below will work exactly as the line above!
//require('./config/expressConfig.js')(app);


const PORT = 5000;

// Routes:
app.get('/', (req, res) => {
    //res.send('Hello from Express!');
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}... `));