function input_check(form) {
    // let jumin1 = document.input_form.jumin1.value;
    // let jumin2 = document.input_form.jumin2.value;
    let jumin1 = form.jumin1.value;
    let jumin2 = form.jumin2. value;
    let jumin = jumin1 + "-" + jumin2;
    alert(jumin);
    
    let jumin_num = prompt("주민등록번호를 입력하라!");
    let w = 2, hap = 0, chk;

    for(let i=0; i< jumin_num.length-1; i++){
        if(i==6) {
            continue;
        }


    hap += parseInt(jumin_num.substring(i, i+1)) * w;

    w++;
    if(w == 10)
        w = 2;
    }

    chk = 11 - (hap % 11);

    if (chk == 10)
        chk = 0;
    else if (chk == 11)
        chk = 1;

    if (chk == parseInt(jumin_num.substring(13, 14)))
        str = jumin_num +"(O)";

    else
        str = jumin_num + "(X)";

    console.log(str);
    }




// ---------형진씨의 코드------------
// const input_num = prompt("주민등록번호를 입력하세요.");

// const id_num = new String(input_num);

// let b1 = 2
// let b2 = 8;

// var sum_1 = 0;
// for (let i = 0; i <= 5; i++) {
//     var a1 = parseInt(id_num[i]) * b1;
//     // console.log(a1);
//     b1++;
//     // var multie_1 = a1 * b1;
//     sum_1 += a1;
// }
// console.log(sum_1);

// var sum_2 = 0;
// for (let i = 7; i <= 12; i++) {
//     var a2 = parseInt(id_num[i]) * b2;
//     b2++;
//     if (b2 == 10) {
//         b2 = 2;
//     } else if (b2 == 11) {
//         b2 = 3;
//     } else if (b2 == 12) {
//         b2 = 4;
//     } else if (b2 == 13) {
//         b2 = 5;
//     }
//     // var multie_2 = a2 * b2;
//     sum_2 += a2;
// }

// console.log(sum_2);

// let check_num = (sum_1 + sum_2) % 11;

// console.log(check_num);

// let check_sub = 11 - check_num;

// if (check_sub == 10) {
//     check_sub = 0;
// } else if (check_sub == 11) {
//     check_sub = 1;
// }

// console.log(check_sub);

// const digit_check = new String(check_sub);

// if (digit_check[1] == id_num.substring(13, 14) || digit_check[0] == id_num.substring(13, 14)) {
//     console.log('O');
// } else {
//     console.log('X');
// }