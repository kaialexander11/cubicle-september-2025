const router = require('express').Router();
const cubeManager = require('../managers/cubeManager.js');

//const router = express.Router();

router.get('/', async (req, res) => {

    //console.log(req.query);
    //res.send('Hello from Express!');

    const { search, from, to } = req.query;

    const cubes = await cubeManager.getAll(search, from, to);

    //const cubes = cubeManager.getAll();
    res.render('index', { cubes, search, from, to });

});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;
