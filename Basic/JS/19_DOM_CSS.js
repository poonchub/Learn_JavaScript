/**
DOM CSS 
    element.classList.add("class")          //เพิ่ม class style
    element.classList.remove("class")       //ลบ class style
    element.classList.toggle("class")       //สลับ class style
    element.classList.contains("class")     //เปรียบเทียบ class style เช็คว่ามีหรือไม่
*/

const box = document.querySelector('.box')
let status;

function addDarkMode(){
    box.classList.add("darkMode")
}

function removeDarkMode(){
    box.classList.remove("darkMode")
}

function switchMode(){
    box.classList.toggle("darkMode")
    let status = box.classList.contains("darkMode")
    console.log(status)
    
    if(status){
        box.style.background = "black"
        box.style.color = "white"
    }
    else{
        box.style.background = "yellow"
        box.style.color = "green"
    }
}