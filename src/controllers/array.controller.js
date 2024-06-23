

const { performance } = require('perf_hooks');
const { OutPutMessage } = require("../util/OutPutMessage");


const createArray = async (req, res) => {
console.log ("ARRAYS : ", req.body.numArrays)
const size = parseInt(req.body.numArrays);

if (size < 1 || size == ""){
    let msg = " Numero de array debe ser mayor a 0";
    return res.status(500).send(msg);
}

try{
    const min = 1;
    const max = 5;
    
    const array = generateArray(size, min, max);
    console.log('Generated array:', array);
    
    const minIds = findMinIds(array);
    console.log('Min ids:', minIds);

    for (let number in minIds) {
        console.log(`* El id menor del número ${number} es ${minIds[number]}`);
    }

    const { result: sum1, time: time1 } = measureExecutionTime(() => sumArray(Object.values(minIds)));
    console.log(`* La sumatoria es: ${sum1}`);
    console.log(`* timer: ${time1.toFixed(3)}ms`);

    const { result: sum2, time: time2 } = measureExecutionTime(() => sumArray(Object.values(minIds)));
    console.log(`* La sumatoria es: ${sum2}`);
    console.log(`* timer: ${time2.toFixed(3)}ms`);

    const totalExecutionTime = time1 + time2;
    console.log(`* Total execution time: ${totalExecutionTime.toFixed(3)}ms`);
} catch (error) {
    throw new OutPutMessage(500, "Ocurrio un error al crear array", "ERROR");
}
 
   

};

function generateArray(size, min, max) {
    const array = [];
    for (let i = 0; i < size; i++) {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        array.push({ id: i + 1, number: number });
    }
    return array;
}

function findMinIds(array) {
    const minIds = {};
    array.forEach(item => {
        if (!minIds[item.number] || minIds[item.number] > item.id) {
            minIds[item.number] = item.id;
        }
    });
    return minIds;
}

function sumArray(array) {
    return array.reduce((sum, value) => sum + value, 0);
}

function measureExecutionTime(fn) {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    const time = end - start;
    return { result, time };
}



module.exports = {
  createArray
};