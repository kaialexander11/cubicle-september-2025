const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');


router.use(homeController);
//app.get('/', homeController.getHome);
router.use('/cubes', cubeController);
router.get('/*splat', (req, res) => {
    res.redirect('/404');
});

module.exports = router;