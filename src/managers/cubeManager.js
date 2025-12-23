const Cube = require('../models/Cube.js');

const uniqid = require('uniqid');
//const db = require('../db.json');
//const cubes = [];

const cubes = [

    {
        id: '5nb19ft3mg5826me',
        name: 'Matrix Cube',
        description: 'Extremely rare Cube',
        imageUrl: 'https://images.stockcake.com/public/5/8/8/58819408-9836-4f1c-b2a4-86c70f4a05c4_large/neon-cube-organization-stockcake.jpg',
        difficultyLevel: 4,
    },
    {
        id: '11b19ft3mg5826de',
        name: 'Neon Cube',
        description: 'Extremely powerful Cube',
        imageUrl: 'https://images.stockcake.com/public/7/6/0/760e6d7e-d57e-49d7-a48f-6883128c4326_medium/neon-tech-cube-stockcake.jpg',
        difficultyLevel: 5,
    },

];

//exports.getAll = () => cubes.slice();

exports.getAll = (search, from, to) => {

    let result = cubes.slice();

    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }

    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;

};

//exports.getOne = (cubeId) => cubes.find(x => x.id == cubeId);
//exports.getOne = (cubeId) => Cube.findById(cubeId).lean();
//exports.getOne = (cubeId) => Cube.findById(cubeId).lean();
//exports.getOneLean = (cubeId) => this.getOne(cubeId);

// exports.getOne = async (cubeId) =>{
//     await Cube.findById(cubeId);
// };

exports.getOne = (cubeId) => Cube.findById(cubeId);
exports.getOneWithAccessories = (cubeId) => this.getOne(cubeId).populate('accessories');

exports.create = (cubeData) => {

    //const newCube = {
        //id: (new Date()).getTime(),
        //id: cubes.length + 1,
    //     id: uniqid(),
    //     ...cubeData,
    // };

    const cube = new Cube(cubeData);

    //await cube.save();

    //cubes.push(newCube);
    
    return cube.save();

}; 

exports.update = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData);

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId);

exports.attachAccessory = async (cubeId, accessoryId) => {

   //return Cube.findByIdAndUpdate(cubeId, { $push: { accessories: accessoryId } });
   
   const cube = await Cube.findById(cubeId);

   cube.accessories.push(accessoryId);

   return cube.save();

}; 