/*
Function 
    ไม่มีการรับค่าและไม่ส่งค่า
    function name(){
        statement;
    }

    มีการรับค่าและไม่ส่งค่า
    function name(ค่าที่ส่งเข้า){
        statement;
    }

    มีการรับค่าและส่งค่า
    function name(ค่าที่ส่งเข้า){
        statement;
        return ค่าที่ส่งออก;
    }

    ไม่มีการรับค่าและแต่ส่งค่า
    function name(){
        statement;
        return ค่าที่ส่งออก;
    }

    การกำหนดค่าเริ่มต้น
    function name(var1 = ค่าเริ่มต้น, var2 = ค่าเริ่มต้น){
        statement;
    }
*/

function message(){
    alert("แจ้งเตือนเงินเข้า")
}

function sum(a , b){
    console.log("Sum = "+(a+b))
}

function getSalary(salary){
    let bonus = 1000;
    return salary+bonus;
}

function PI(){
    return 3.414
}

sum(5, 10)
console.log("Salary = "+getSalary(5000))
console.log("PI = "+PI())
