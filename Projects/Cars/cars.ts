function createCar(manufacturer:string, modelName:string, ...args:any) {
    let car:any = {
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

let carObject = createCar('Toyota', 'Supra', 'color', 'white', 'year', 2024);

console.log(carObject);
