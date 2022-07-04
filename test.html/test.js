// -------------------소수의 개수 구하기-------------------
// var count = 0
// var num1 = parseInt(prompt("첫번째 수를 입력하세요."));
// var num2 = parseInt(prompt("두번째 수를 입력하세요."));

// if(num1 > num2){
//     var max_num = num1;
//     var min_num = num2;
// }else{
//     var max_num = num2;
//     var min_num = num1;
// }

// var i =min_num;

// do{
//     var j = 2;
//     do{
//         if(i % j == 0){
//             break;
//         }
//         j++
//     }while(j < i)
//     if(i==j){
//         count++;
//         console.log(i);
//     }
//     i++;
// }while(i <= max_num);
// console.log(`소수의 총 개수는 ${count}`)


// 포문
// for(var i=min_num; i <= max_num; i++){
//     for(var j = 2; j <= i; j++){
//         if(i%j==0) {
//             break;
//         }
//     }

//     if(i == j){
        //    count++;     
//         console.log(i);
//         

//     }

// }
// console.log(`소수의 총 개수는 ${count}`)

// 와일문
// var i=min_num;
// while(i <= max_num){
//     var j = 2;
//     while(j <= i){
//         if(i%j==0) {
//             break;
//         }
//         j++;
//     }

//     if(i == j){
//            count++;     
//         console.log(i);
        

//     }
//     i++;
// }
// console.log(`소수의 총 개수는 ${count}`)



// --------------------------
var person ={
    name : 'Hwang',
    age:30,
    sayHello: function(){
        var name = 'gisung'
        
        // return console.log(`Hello! My name is ${this.name}.`);
        // return console.log(`Hello! My age is ${this.age}.`);
        // return console.log(`Hello! My name is ${name}.`);
        // return (`Hello! My name is ${name}. My age is ${this.age} my firstname is ${this.name}.`);;
    
    sayHello () {
    console.log(`Hello! My name is ${this.name}.`);
    console.log(`Hello! My age is ${this.age}.`);    
    console.log(`Hello! My tel is ${this.tel}.`);   
    str = `<table border=1 align="center">`;
    str += `<tr><th>name</th><th>age</th></tr>`
    str += `<tr><th>${this.name}</th><th>${this.age}</th><th>${this.tel}</th></tr>`;
    str += `</table>`;
    return document.write(str);
}
    
    }
}
console.log(typeof person);
console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person["name"]);
console.log(person[`name`]);
console.log(person.sayHello());

person.tel = "010-1234-9301";
console.log(person.tel);



// ---------------------구구단---------------------
// var num1 = parseInt(prompt("첫 번째 수를 입력하라!"));
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
//         document.write(`<th> ${i} 단 </th>`);                                        - * `을 사용할 경우 +를 할 필요없이 사용가능 *
//     }
//     document.write("</tr>");
//     for(var i = 2; i <=9; i++)
//     {
//         document.write("<tr align = 'center'>");
//             for(var j = min_num; j <= max_num; j++) {
//                 // document.write("<td>" + i + "*" + j + "=" + (i*j) + "</td>");
//                 document.write(`<td> ${i} * ${j} = ${i*j} </td>`);                  - * `을 사용할 경우 +를 할 필요없이 사용가능 *
//             }
//             document.write("</tr>");
//           }