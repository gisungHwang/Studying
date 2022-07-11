const target = 'a12 12q 1ss asdw 135q?';
// const regexp = /is/i; //리터럴방식
const regExp = /^[a-z]+/g;
document.write(target.match(regExp));

// const regexp = new RegExp(/is/,'i'); //생성자 함수를 사용하여 객체를 생성+
// console.log(regexp.test(target));


