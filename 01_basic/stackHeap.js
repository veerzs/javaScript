// let value='veerrao1323@gmail.com'
// let anotherValue=value
// anotherValue='Komalrao1323@gmail.com'
// console.log(anotherValue);  output-Komalrao1323@gmail.com
// console.log(value)          output-veerrao1323@gmail.com

let userOne={
    name:"Veerbhan",
    userId:"Veerrao123",

}
let userTwo=userOne
userTwo.name='Komal'
userTwo.userId='Komalrao123'

console.log(userOne.name) // Output= komal
console.log(userTwo.name) // Output= komal