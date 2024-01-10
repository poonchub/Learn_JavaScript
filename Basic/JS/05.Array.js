/*
Array
    วิธีสร้าง 1
        let arrName1 = new Array(ขนาด);
        arrName1[0] = 200;

        let arrName2 = new Array(data1, data2, data3);

    วิธีสร้าง 2
        let arrName3 = newArray[data1, data2, data3];
*/

let number = new Array(2);
number[0] = 10;
number[1] = 20;

let str = new Array("dog", "cat", "cow");

console.log(number[0]);
console.log(number[1]);
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

str[0] = "lion"     // การเปลี่ยนค่า
console.log(str[0]);

console.log(number);    // แสดงสมาชิกทั้งหมด
console.log(str)

