const uniqid = require('uniqid');

const cubes = [];

exports.getAll = () => cubes.slice();

exports.create = (cubeData) => {

    const newCube = {
        //id: (new Date()).getTime(),
        //id: cubes.length + 1,
        id: uniqid(),
        ...cubeData,
    };

    cubes.push(newCube);

    return newCube;

}; 