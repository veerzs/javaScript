//Join Sting
// let name='Veer'
// let lastName="Rao"
// console.log(name + lastName);
// console.log(`my name is ${name} ${lastName.toLowerCase(lastName)}`);//output=my name is Veer rao

const gameName=new String("Veer-rao")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('r'));
const newLine=gameName.substring(0,4)
console.log(newLine)
const newStringOne="  hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hitesh.com"