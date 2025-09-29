//console.log('Hello from Express!');
//const path = require('path');
//const handlebars = require('express-handlebars');

const express = require('express');
const homeController = require('./controllers/homeController.js');
const expressConfig = require('./config/expressConfig.js');
const handlebarsConfig = require('./config/handlebarsConfig.js');
const cubeController = require('./controllers/cubeController.js');


const app = express();
const PORT = 5000;

expressConfig(app);
handlebarsConfig(app);

app.use(homeController);
//app.get('/', homeController.getHome);
app.use('/cubes', cubeController);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}... `));


