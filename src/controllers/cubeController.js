const router = require('express').Router();
const cubeManager = require('../managers/cubeManager.js');


// Path: /cubes/create
router.get('/create', (req, res) => {
    //console.log(cubeManager.getAll());
    res.render('create');
});

router.post('/create', async (req, res) => {

    const { 

        name, 
        description, 
        difficultyLevel, 
        imageUrl, 

    } = req.body;

    const cube = await cubeManager.create({

        name,
        description,
        imageUrl, 
        difficultyLevel: Number(difficultyLevel),

    });

    res.redirect('/');
    //res.send('Form submitted!');
});

router.get('/:cubeId/details', async (req, res) => {

    const cube = await cubeManager.getOne(req.params.cubeId).lean();
    

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', { cube });

});

router.get('/:cubeId/attach-accessory', (req, res) => {
    res.render('accessory/attach');
});

module.exports = router;