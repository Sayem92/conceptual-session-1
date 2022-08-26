// const person = {
//     name : 'Hero Alom',
//     age : 34,
// };

// const user = {
//     phone : '20178520214',
//     address : 'Bari nai',
// };

// const { name : myName, age } = person

// console.log(myName, age)


const person = {
     name : 'Hero Alom',
    age : 34,
    phone : '20178520214',
     address : 'Bari nai',
     p: [1, 2, 3, 4]
 };

//  console.log(person.name)
//  console.log(person.age)
//  console.log(person.phone)



// bar bar call na kore ak jaygay store kore raka and ja dorkar just property call
const {name, age, address, p: number} = person;

for(let i of number){
    console.log(i);
}
console.log(name);
