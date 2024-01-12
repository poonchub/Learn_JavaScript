/*
Object
    การสร้าง
        let nameObj = {
            propertyName:value
        };

    Method

*/

let user = {
    name:"Poonchub", 
    age:20, 
    email:"poonchubnanawan310@gmail.com",

    getUser:function(){
        return this.name+" "+this.email
    }
};

console.log(user)
console.log(user.name)
console.log(user.age)
console.log(user.email)

console.log(user.getUser())