// singleton

// object literal

// const jsUser = {
//     "name person":"nandan",
//     usn:99,
//     location:"belagal Thanda",
//     email:"nandan@gmail.com",
//     isLoggedIn:false,
//     lastLoginDays:['monday','saturday']

// }

// console.log(jsUser.email);//  
// console.log(jsUser["email"])// If your key is in the form of (nandan rathod) with space and double quote

// console.log(jsUser["name person"]);

// jsUser.email="rnr@chatgpt.com"
// Object.freeze(jsUser)
// jsUser.email="rnr@micr.com"
// console.log(jsUser);

// jsUser.greeting = function()
// {
//     console.log("hello js user")
// }

// console.log(jsUser.greeting);


// const tindeUser = new Object()

const tindeUser = {}

tindeUser.id="Nandan123"
tindeUser.name="nandan"
tindeUser.isLoggedIn=false

// console.log(tindeUser);

const regularUser = {
    email:"some@gmail.com",
    fulname: {
        userfullname:{
            firstName:"nandan",
            lastName:"rathod"
        }
    }
}
console.log(regularUser);

// console.log(regularUser.fulname.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3=({},obj1, obj2)

const obj3= {...obj1,...obj2}
console.log(obj3);

const users = [
    {
        id:1, 
        email:"h@gmail.com",
    }
]

users[1].email