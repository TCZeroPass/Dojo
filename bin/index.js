
export default class Calculator {

    add(numbers = "") {
        this.numbers = numbers;

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

