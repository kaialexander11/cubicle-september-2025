const router = require('express').Router();
const cubeManager = require('../managers/cubeManager.js');


// Path: /cubes/create
router.get('/create', (req, res) => {
    //console.log(cubeManager.getAll());
    res.render('create');
});

router.post('/create', (req, res) => {

    const { 

        name, 
        description, 
        difficultyLevel, 
        imageUrl, 

    } = req.body;

    cubeManager.create({

        name,
        description,
        imageUrl, 
        difficultyLevel: Number(difficultyLevel),

    });


    res.redirect('/');
    //res.send('Form submitted!');

});

module.exports = router;