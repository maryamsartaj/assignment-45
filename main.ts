function carDetails (manufacturer: string, modelName: string, ...
additionalInfo){

    const car = {manufacturer, modelName, ...Object.fromEntries
    (additionalInfo)};

    return car;
};

const myCarDetails = carDetails("Toyota","Corolla", [`color`,`blue`],
[`year`,2022]);

console.log(myCarDetails);