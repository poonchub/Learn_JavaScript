/*
Object
    การสร้าง
        let nameObj = {
            propertyName:value
        };

    Method
        getUser:function(){
        return this.name+" "+this.email
        }
    
    การเข้าถึง
        objectName.propertyName
        objectName["propertyName"]

*/

let user = {
    name:"Poonchub", 
    age:20, 
    email:"poonchubnanawan310@gmail.com",

    getUser:function(){
        return this.name+" "+this.email
    }

};

// การเข้าถึง
console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user.email)

console.log(user.getUser())