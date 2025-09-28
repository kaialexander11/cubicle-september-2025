//console.log('Hello from Express!');

const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();

// Express config:
app.use(express.static(path.resolve(__dirname, 'public')));

// Handlebars config:
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

const PORT = 5000;

// Routes:
app.get('/', (req, res) => {
    //res.send('Hello from Express!');
    res.render('index');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}... `));