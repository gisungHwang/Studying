// // --------------구구단-----------------
//     var num1 = parseInt(prompt("첫 번째 수를 입력하라!"));
//     var num2 = parseInt(prompt("두 번째 수를 입력하라!"));
//     var min_num, max_num;
//     if (num1 > num2){
//         max_num = num1;
//         min_num= num2;
//     }
//     else {
//         max_num = num2;
//         min_num = num1;
//     }
//     alert("작은 수는" +min_num);
//     alert("큰 수는" +max_num);
//     document.write("<table border = '1' align = 'center'>");
//     document.write("<tr align = 'center'>");
//     for (var i = min_num; i <= max_num; i++)
//     {
//         // document.write("<th>" + i + "단" + "</th>");
//         document.write(`<th> ${i} 단 </th>`);                                       
//     }
//     document.write("</tr>");
//     for(var i = 2; i <=9; i++)
//     {
//         document.write("<tr align = 'center'>");
//             for(var j = min_num; j <= max_num; j++) {
//                 // document.write("<td>" + i + "*" + j + "=" + (i*j) + "</td>");
//                 document.write(`<td> ${i} * ${j} = ${i*j} </td>`);               
//             }
//             document.write("</tr>");
//           }




// -------------구구단 함수변경---------------

// function input_number(){
    
//     var num1, num2, num3;
//     num1 = parseInt(prompt("첫 번째 수를 입력하라!"));
//     num2 = parseInt(prompt("두 번째 수를 입력하라!"));
//     num3 = parseInt(prompt("곱셈의 최대를 입력하라!"));
//     return {num_1:num1, num_2:num2, num_3:num3};
    
// }
// function number_compare(num1, num2){
//     var min_num, max_num;
//     if (num1 > num2){
//         max_num = num1;
//         min_num = num2;
//     }
//     else {
//         max_num = num2;
//         min_num = num1;
//     }
//     return{min_num:min_num, max_num:max_num};
// }
// function gugudan() {
//     var num1, num2, min_num, max_num, i, j;
    
//     var num = input_number();
    
//     num1 = num.num_1;   
//     num2 = num.num_2;
//     var num3 = num.num_3;
    
//     var min_max = number_compare(num1, num2);
//     min_num = min_max.min_num;
//     max_num = min_max.max_num;
  
//     document.write("<table border = '1' align = 'center'>");
//     document.write("<tr align = 'center'>");
    
//     for (var i = min_num; i <= max_num; i++){
//         // document.write("<th>" + i + "단" + "</th>");
//         document.write(`<th> ${i} 단 </th>`);                                       
//     }
//     document.write("</tr>");
    
//     function repeat(n){
//         for(var i = 0; i <=n; i++)
//     {
//         document.write("<tr align = 'center'>");
//             for(var j = min_num; j <= max_num; j++) {
//                 // document.write("<td>" + i + "*" + j + "=" + (i*j) + "</td>");
//                 document.write(`<td> ${i} * ${j} = ${i*j} </td>`);               
//             }
//             document.write("</tr>");
//           }
//     }
//     repeat(num3);
//         }
        
//         gugudan();


// ------------------소수를 함수로 변경----------------
function input_data(){
var num1 = parseInt(prompt("첫번째 수를 입력하세요."));
var num2 = parseInt(prompt("두번째 수를 입력하세요."));
return {num_1:num1, num_2:num2};
}

var num = input_data()
var num1 = num.num_1;
var num2 = num.num_2;


function minmax_proc(num1, num2){            //var minmax_proc = (num1, num2) => { };
    if(num1 > num2){
        var max = num1;
        var min = num2;
    }else{
        var max = num2;
        var min = num1;
    } return{min_num:min, max_num:max};
}

var min_max = minmax_proc(num1, num2);
var min = min_max.min_num;
var max = min_max.max_num; 

function prime_number(min, max){    //var prime_number(min_num, max_num) => { };
    var count = 0;
    for(var i=min; i <= max; i++){
        for(var j = 2; j <= i; j++){
            if(i%j==0) {
                break;
            }
        }
        if(i == j){
            count++;     
            console.log(i);
        }
    }
    return count;
}

var cnt = prime_number(min, max);

function total_count(){
    return console.log(`소수의 총 개수는 ${cnt} `);
}
total_count();






function changeVal (primitive, obj) {
    primitive += 100;
    obj.name = 'Lee';
}

var num = 500;
// var person = {name: 'Han'};
var person = { who: 'Han' };

console.log(num); // 결과 : 500
console.log(person); // 결과 : {who: 'Han'}

changeVal (num, person);

console.log(num); // 결과 : 500, 원시 값의 원본 : 훼손 X
console.log(person); // 결과 : {name: 'Lee'}, 객체 값의 원본 : 훼손 O
