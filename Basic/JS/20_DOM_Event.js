/*
DOM Event
    เหตุการณ์หรือการกระทำบางอย่างที่เกิดขึ้นกับ element เช่น การคลิกเมาส์ การเคลื่อนย้ายเมาส์ การกดปุ่มคีย์บอร์ด

    Event                                               ทำงานร่วมกับแท็ก
        onfocus=""      เมื่อ element นั้นได้รับการโฟกัส       select,text,textarea
        onblur=""       เมื่อ element นั้นสูญเสียการโฟกัส      select,text,textarea
        onchange=""     เมื่อผู้ใช้เปลี่ยนแปลงค่าในฟอร์มรับข้อมูล   select,text,textarea
        onselect=""     เมื่อผู้ใช้เลือกข้อความในช่องข้อความ     text,textarea
        onsubmit=""     เมื่อผู้ใช้คลิกปุ่ม submit              form
        onmouseover=""  เมื่อ object ถูกเลื่อน mouse pointer ไปทับ   a,div
        onmouseout=""   เมื่อ object ถูกเลื่อน mouse pointer ออกไป  a,div
        onclick=""      เมื่อ object ถูกคลิก                a,button,checkbox,radio,reset,submit
        onload=""       เมื่อโหลดเอกสาร/หน้าเว็บเสร็จ         body
        onunload=""     เมื่อยกเลิกการโหลด                 body

    คือ เหตุการณ์หรือารกระทำบางอย่างที่เกิดขึ้นกับ element แต่รูปแบบการเขียนจะเขียนในฝั่ง Javascript ทั้งหมด

    โครงสร้าง
        element.addEventListener(event, callback)
        
*/

function welcome(){
    alert("ยินดีต้อนรับเข้าสู่เว็บของเรา")
}

function hightlight(object){
    object.style.background = "yellow"
}

function unhightlight(object){
    object.style.background = "white"
}

function getMenu(){
    const menu = document.querySelector('#menu')
    const display = document.querySelector('#displaymenu')
    display.innerText = menu.value
}

// EventListener
const box = document.querySelector('.box')
box.addEventListener('mouseover', select)       //event ไม่มีคำว่า on-
box.addEventListener('mouseout', unselect)

function select(){
    box.style.background = "lightblue"
}

function unselect(){
    box.style.background = "white"
}