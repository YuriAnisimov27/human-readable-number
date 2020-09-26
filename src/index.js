module.exports = function toReadable (number) {
    let result = '';

    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 
    'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 
    'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const numbers10 = [0, 1, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        result = numbers[number];
    } else if (number < 100) {
        if (number % 10 === 0) {
            result = numbers10[(number - number % 10) / 10];
        } else {
            result = numbers10[(number - number % 10) / 10] + ' ' + numbers[number % 10];
        }  
    } else {
        result = numbers[(number - number % 100) / 100] + ' hundred';
        if (number % 100 === 0) {
            return result;
        } 
        number = number % 100;
        if (number < 20) {
            result = result + ' ' + numbers[number];
        } else if (number < 100) {
            if (number % 10 === 0) {
                result = result + ' ' + numbers10[(number - number % 10) / 10];
            } else {
                result = result + ' ' + numbers10[(number - number % 10) / 10] + ' ' + numbers[number % 10];
            }
        }
    }

    return result;
};