let jumin = prompt("주민등록번호를 입력하라!");
let W = 2, hap = 0, chk;

for(let i=0; i< jumin.length01; i++){
    if(i==6)
    continue;
    hap += parseInt(jumin.substring(i, i+1)) * W;

    w++;
    if(w == 10);
        w = 2;
}

chk = 11 - (hap % 11);

if (chk == 10)
    chk = 0;
else if (chk == 11)
    chk = 1;

if (chk == parseInt(jumin.substring(13, 14)))
    str = jumin +"(O)";

else
    str = jumin + "(X)";

console.log(str);