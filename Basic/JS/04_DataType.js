/*
Data type
    boolean     True/false
    number      int/float
    string      "string"
    boject      {var1:"string1", var2:"string2"}
    array       {data1, data2, data3}

หัวข้อที่เกี่ยวข้อง
    typeof      เช็คชนิดข้อมูล
    null        ไม่มีการกำหนดค่า ถูกกำหนดค่าโดยผู้เขียน
    undefined   ไม่มีการกำหนดค่า (default)

การแปรงชนิดข้อมูล
    String to Number
        x = parseInt('Number');
        x = parseFloat('Number');
        ใช้เครื่องหมาย + ้พิ่มข้างหน้า
    Number to String
        ใช้เครื่องหมาย "" + ตัวแปร หรือ ค่าที่เป็นตัวเลข
        ใช้ toString() เช่น x.toString();
*/

let money = 500;
let price = "15";
console.log(money);
console.log(typeof(money));

console.log(price);
console.log(typeof(price));

price = parseInt(price)
console.log(price);
console.log(typeof(price));

price = ""+price
console.log(price);
console.log(typeof(price));