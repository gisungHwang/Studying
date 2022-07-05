// var person = {
//     hakbun: '',
//     name: '',
//     kor: 0,
//     eng: 0,
//     math: 0,
//     tot: 0,
//     avg: 0.0,
//     grade: '',
//     getTotal: function(){
//         this.tot = this.kor + this.eng + this.math;
//     },
//     getAvg: function(){
//         this.avg = this.tot / 3;
//     },
//     getGrade: function(){
//         switch (parseInt(this.avg / 10)) {
//             case 10:
//             case 9:
//             this.grade = "수";
//             break;
//             case 8:
//             this.grade = "우";
//             break;
//             case 7:
//             this.grade = "미";
//             break;
//             case 6:
//             this.grade = "양";
//             break;
//             default:
//             this.grade = "가";
//             break;
//         }
//     },
//     printData: function(){
//     str = `<table border=1 align="center">`;
//     str += `<tr><th>학번</th><th>이름</th><th>국어</th><th>영어</th><th>수학</th><th>총점</th><th>평균</th><th>등급</th></tr>`
//     str += `<tr><td>${this.hakbun}</td><td>${this.name}</td><td>${this.kor}</td><td>${this.eng}</td><td>${this.math}</td><td>${this.tot}</td><td>${this.avg}</td><td>${this.grade}</td></tr>`;
//     str += `</table>`;
//     document.write(this.tot)
//     return document.write(str);
//     }
// };


// person.hakbun = prompt("학번 입력");
// person.name = prompt("이름 입력")
// person.kor = parseInt(prompt("국어점수 입력"));
// person.eng = parseInt(prompt("영어점수 입력"));
// person.math = parseInt(prompt("수학점수 입력"));
// person.getTotal();
// person.getAvg();
// person.getGrade();
// person.printData();

// var person{

// }

// var first_key = Object.keys(obj)[0];
// var person = {
//     name :'HWANG',
//     age : 27
// };
// document.write(first_key)





// -------형진씨의 구구단함수 설명-----------
function input_num () {
// 4. 3번에서 호출된 함수를 작동시킨다.
    var num1 = parseInt(prompt("첫 번째 숫자를 입력하세요."));  
    var num2 = parseInt(prompt("두 번째 숫자를 입력하세요."));
    var num3 = parseInt(prompt("곱셈의 최댓값을 입력하세요."));
    return { num_1: num1, num_2: num2, num_3: num3};
    // 5.  다른 함수에 값을 전달하기 위해 key 값을 이용한 객체 값으로 전달
}

function if_num (num1, num2) {
// 8. 7번에서 입력받은 변수를 인자로 갖고 큰 수와 작은 수를 비교한다.
    var min, max;

    if (num1 < num2) {
        var min = num1;
        var max = num2;
    } else {
        var min = num2;
        var max = num1;
    }
    return {min_num:min, max_num:max};
    // 9. 위에서 비교한 숫자를 다른 함수에 값을 전달하기 위해 key 값을 이용한 객체 값으로 전달
}

function multiply_num () {
// 2. 1번에서 호출된 함수를 작동시킨다.
    var num1, num2, num3;

    var num = input_num();
    // 3. 작동 중에 존재하는 또다른 함수를 출력한다.

    num1 = num.num_1;
    num2 = num.num_2;
    num3 = num.num_3;
    // 6. 5번에서 받아온 값을 각각 변수를 지정해서 담아준다.

    var min_max = if_num (num1, num2);
    // 7. 6번에서 지정된 각각의 변수를 if문에 사용할 변수로써 인자로 지정한다.
    
    var min = min_max.min_num;
    var max = min_max.max_num;
    // 10. 9번에서 지정된 객체 값을 각각의 변수를 지정해서 담아준다.

    document.write("<table border='2'>");
    document.write("<tr>");
    function repeat0(n) {
        for (var i = min; i <= n; i++) {
            document.write(`<th>${i}단</th>`);
        }
    }
    repeat0(max);
    document.write("</tr>")
    function repeat1(n) {
        for (var j = 1; j <= n; j++) {
            document.write("<tr>");
            function repeat2(n) {
                for (var i = min; i <= n; i++) {
                    document.write(`<td>${i} X ${j} = ${j * i}</td>`);
                }
            }
            repeat2(max);
            document.write("</tr>");
        }
    }
    repeat1(num3);
    document.write("</table>");
}

multiply_num();
// 1. 최종적으로 사용될 함수를 호출한다.