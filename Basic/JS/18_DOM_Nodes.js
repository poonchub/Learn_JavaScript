/*
DOM Nodes
    document.createElement(element)     สร้าง element ใหม่
    document.removeChild(element)       ลบ node ลูก
    document.appendChild(element)       นำ element ไปต่อใน node แม่
    document.replaceChild(new, old)     แทนที่่ element
*/

const textAll = document.querySelectorAll('p');

console.log(textAll)
console.log(textAll[0])
console.log(textAll[1].innerHTML)       //เข้าถึงข้อความใน tag
console.log(textAll[2])


const menu = document.querySelector('.menu')
let count = 1

function addItem(){
    const item = document.createElement('li')  //สร้าง element ใหม่
    item.innerText = "item"+count
    menu.appendChild(item)     //นำ element ไปต่อใน node แม่
    count++
}

function removeItem(){
    const item = document.querySelector('li')
    menu.removeChild(item)     //ลบ node ลูก
    count--
}

function replaceItem(){
    const newItem = document.createElement('li')
    newItem.innerText = "newItem"
    const oldItem = document.querySelector('li')
    menu.replaceChild(newItem, oldItem)
}
