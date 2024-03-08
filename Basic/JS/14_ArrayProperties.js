/*
Array Properties
    หาจำนวนสมาชิกและเรียงลำดับ
        let color = ["red", "green", "blue"];
        let x = color.length;
        let y = color.sort();       ใช้ได้แค่ string
        let z = color.reverse();    ใช้ได้แค่ string

    เรียงลำดับตัวเลข
        console.log(arr)
        arr.sort(function(a, b){
            return a-b
        })

    การเพิ่มสมาชิก
        color.push(ค่าที่ค้องการเพิ่ม);

    การเข้าถึงสมาชิก For loop
        for (let i=0 ; i<arr.length ; i++){
            console.log(arr[i]);
        }

    การเข้าถึงสมาชิก For each
        let number = [1, 2, 3, 4, 5]
        
        console.forEach(myData);
        function myData(item){
            console.log(item);
        }

    แปลง array เป็น string
        .toString()     แปลงเป็น string
        .join("*")      นำค่าแต่ละค่าใน array มารวมเป็นข้อความที่มีตัวคั่นตามที่กำหนด
        .pop()          เอาตัวสุดท้ายออก

    การรวม array
        .concat(array ที่จะเอามารวม)
*/

// การเข้าถึงสมาชิก For loop
let number = [9, 2, 7, 4, 5]
for (let i=0 ; i<number.length ; i++){
    console.log(number[i]);
}

// การเข้าถึงสมาชิก For each
let color = ["red", "green", "blue"]
color.forEach(myData);
function myData(item){
    console.log(item);
}

// เรียงลำดับ String
console.log(color.sort())
console.log(color.reverse())

// เรียงลำดับ number น้อยไปมาก
number.sort(function(a, b){
    return a-b
})
console.log(number)

// เรียงลำดับ number มากไปน้อย
number.sort(function(a, b){
    return b-a
})
console.log(number)

// แปลง array เป็น string
number = number.join(" | ")

console.log(number)

// การรวม array
let animal = ["cat", "dog"]
let all = animal.concat(color)

console.log(all)