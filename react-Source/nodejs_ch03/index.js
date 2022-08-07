const {odd, even} = require('./var');  //{odd, even}을 obj로 선언 가능
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
    if(str.length % 2) {
        return odd;     //obj.odd 로 선언 가능
    }
    return even;        //obj.even으로 선언 가능
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
