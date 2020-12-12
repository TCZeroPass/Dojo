
class Calculator {
    
    constructor(numbers = ""){
        this.numbers = numbers;
    }
    
    add() {
        if(!this.inputIsValid()) return "0";
        return this.calculateSumFromStringArray();
    }

    inputIsValid() {
        return ((this.numbers === null || this.numbers === "") ? false : true);             
    }

    calculateSumFromStringArray() {
        let numberArray = this.numbers.split(",");
        return numberArray.reduce((a,b) => parseFloat(a) + parseFloat(b));
    }
}

//--------------------- instantiate classes and pass values------------------------
let firstCase = new Calculator(null);
let result = firstCase.add();
console.log(result);

let correctValuesPassed = new Calculator("1,2,3");
let resultIntNumbers = correctValuesPassed.add();
console.log(resultIntNumbers);

let correctValuesPassedFloat = new Calculator("1,2.2,3.3,5");
let resultFloatNumbers = correctValuesPassedFloat.add();
console.log(resultFloatNumbers);



//simple function for testing
const addNumber = (a, b) => a + b;

module.export = { addNumber, Calculator };