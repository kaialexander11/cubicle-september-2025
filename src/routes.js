const router = require('express').Router();

const homeController = require('./controllers/homeController.js');
const cubeController = require('./controllers/cubeController.js');
const accessoryController = require('./controllers/accessoryController');
const userController = require('./controllers/userController');


router.use(homeController);
//app.get('/', homeController.getHome);
router.use('/cubes', cubeController);
router.use('/accessories', accessoryController);
router.use('/users', userController);
router.get('/*splat', (req, res) => {
    res.redirect('/404');
});

module.exports = router;