//console.log('Hello from Express!');
//const path = require('path');
//const handlebars = require('express-handlebars');

const express = require('express');
//const mongoose = require('mongoose');


const expressConfig = require('./config/expressConfig.js');
const handlebarsConfig = require('./config/handlebarsConfig.js');
const dbConnect = require('./config/dbConfig.js');
const routes = require('./routes.js');

const app = express();

const PORT = 5000;

dbConnect()
    .then(() => console.log('DB Connected successfully!'))
    .catch(err => {
        console.log('DB error: ', err.message);
    });

expressConfig(app);
handlebarsConfig(app);

app.use(routes);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}... `));
