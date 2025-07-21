// // Arrays

// const myArr = [0,1,2,3,4]
// const myHeros = ["Shaktiman","nagaraj"]


// // console.log(myArr[3]);
// // myHeros.push("rathod")
// console.log(myHeros);


// // slice, spice

// console.log("A",myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B",myArr);

// const myn2 = myArr.splice(1,3)
// console.log("c",myArr)
// console.log(myn2)


const marval_heros = ["thor", "Ironman", "spiderman"]
const de_heros = ["superman", "flash", "batman"]

// marval_heros.push(de_heros)

console.log(marval_heros);


allHeros=marval_heros.concat(de_heros)
console.log(allHeros);
// console.log(marval_heros[3][1]);

console.log(Array.isArray("Nandan"));//It will show false and 
console.log(Array.from("Nandan"))//It will convert each letter to the array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(typeof score1);

console.log(Array.of(score1,score2,score3));

