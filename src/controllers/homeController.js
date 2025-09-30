const router = require('express').Router();
const cubeManager = require('../managers/cubeManager.js');

//const router = express.Router();

router.get('/', (req, res) => {

    const cubes = cubeManager.getAll();
    //res.send('Hello from Express!');
    res.render('index', { cubes });

});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;
