// var f = function add(x, y) {
//     return x + y;
// }

// // var add = function(x, y) {
// //     return x + y;
// // };   함수표현식

// // var add = (x, y) => x + y;  화살표 함수식
// // var add = f() => 2 +7;

// console.log(f(2, 5));
// document.write(f(2, 5));

// ------
// 변수 or 함수 선언은 앞에 위치시켜야 한다.
// function add(x, y) {
//     return x + y;
// }
// var sub = function(x , y) {
//     return x - y; 
// }
// console.dig(add);
// console.dig(sub);

// console.log(add(2, 5));
// console.log(sub(2,5));


// --------참조에 의한 전달과 외부 상태의 변경--------------
// function changeVal (primitive, obj) {
//     primitive += 100;
//     obj.name = 'Lee';
// }

// var num = 500;
// var person = {name: 'Han'};

// console.log(num); // 결과 : 500
// console.log(person); // 결과 : {name: 'Han'}

// changeVal (num, person);

// console.log(num); // 결과 : 500, 원시 값의 원본 : 훼손 X
// console.log(person); // 결과 : {name: 'Lee'}, 객체 값의 원본 : 훼손 O




