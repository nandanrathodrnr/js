// dates

let myDate = new Date()
console.log(myDate.getTimezoneOffset())

console.log(myDate.toISOString())

let myCreatedDate = new Date(2025,0,23)
console.log(myCreatedDate.toDateString());

let myDate1 = new Date("2025-01-14")
console.log(myDate1.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('defult',
    {
        weekday:"long",
    }
)
