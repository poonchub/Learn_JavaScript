/*
If..Else
    if (เงื่อนไข){
        statement;
    }
    else if (เงื่อนไข){
        statement;
    }
    else {
        statement;
    }

Ternary Operator
    ตัวแปร = เงื่อนไข ? คำสั่งเมื่อเป็นจริง : คำสั่งเมื่อเป็นเท็จ;

*/

let age = 15

if (age<=15){
    console.log("เด็ก")
}
else if (age<=25){
    console.log("วัยรุ่น")
}
else if (age<=60){
    console.log("ผู่ใหญ่")
}
else {
    console.log("วัยชรา")
}