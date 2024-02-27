/*
HTML DOM (Document Object Model)
    เมื่อหน้าเว็บโหลดเสร็จเรียบร้อย Web Browser มันจะสร้าง DOM ของหน้านั้นขึ้นมา โดยมอง HTML เป็นโครงสร้างต้นไม้ (ก้อน Object) หรือเรียกว่า DOM

    คุณสมบัติ
    1. เข้าถึงและเปลี่ยนคุณสมบัติทั้งหมดของ Elament ในหน้าเว็บได้
    2. ควบคุมและเปลี่ยนรูปแบบ CSS ได้
    3. สามารถตอบสนองกกกับเหตุการณ์ที่เกกิดขึ้นหน้าเว็บได้

    การเข้าถึง Element ผ่าน Id, Tag, Class
        document.getElementById("ชื่อไอดี");
        document.getElementByTagName("ชื่อแท็ก");
        document.getElementByClassName("ชื่อคลาส");

        document.querySelector("#idName/tagName/.className")

    DOM Document
        เปลี่ยนเนื้อหา HTML :       element.innerHTML = เนื้อหาใหม่ (สามารถใส่ tag ได้)
        เปลี่ยนเนื้อหา Text :       element.innerText = เนื้อหาใหม่
        เปลี่ยน style Element :   element.style.properties = value

    ดำเนินการผ่าน Method
        element.setAttribute(attribute, value)

    การแสดง String ร่วมกับ Number
        let a = 10
        let b = 20
        console.log(`ข้อความ $(a) ข้อความ $(b)`)

*/

// การเข้าถึง Element ผ่าน Id, Tag, Class
const a = document.getElementById('demo')
const b = document.getElementsByTagName('p')
const c = document.querySelector('p')         // tag p ตัวแรก
const d = document.querySelector('#demo')
const e = document.querySelectorAll('p')      // tag p ทุกตัว
const contentEl = document.querySelector('.content')
const body = document.querySelector('.mode')

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)

function changeData(){
    a.innerHTML = "<strong>Nanawan</strong>"
    a.style.color = "red"
    contentEl.setAttribute('class', 'change')
}

function lightMode(){
    body.setAttribute('class','lightMode')
}

function darkMode(){
    body.setAttribute('class','darkMode')
}