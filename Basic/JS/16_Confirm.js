/*
Confirm
    เป็นหน้าต่างที่ต้องการสอบถามการยืนยันจากผู้ใช้ กก่อนที่จะทำการใดๆ ต่อไป

        confirm("ข้อความ");
    
    โดยผลลัพธ์จะมีค่าทางตรรกศาสตร์
        true    เมื่อคลิก Ok
        false   เมื่อคลิก cancle

*/
let number = [1, 2, 3, 4, 5]
function printArray(){
    let status = confirm("ต้องการแสดง Array หรือไม่?")
    if (status == true){
        console.log(number)
    }
}