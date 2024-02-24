"use strict";
function createCar(manufacturer, modelName, ...args) {
    let car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    for (let i = 0; i < args.length; i += 2) {
        let key = args[i];
        let value = args[i + 1];
        car[key] = value;
    }
    return car;
}
let carObject = createCar('Toyota', 'Camry', 'color', 'red', 'year', 2022);
console.log(carObject);
