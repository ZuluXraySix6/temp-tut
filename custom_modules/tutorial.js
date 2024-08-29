const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class ExportClass{
    constructor(){
        console.log("This is a constructor.");
    }
}
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.ExportClass = ExportClass;

module.exports = {sum: sum,
    PI: PI,
    ExportClass: ExportClass
}

