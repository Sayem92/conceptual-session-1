const numbers = [12, 32, 25, 75, 13, 54, 97, 25];

// const names = ['abul', 'babul', 'mehedy', 'jakariya', 'jack', 'sakib'];

for (let item of numbers) {
    // console.log(item)
 }

//  numbers.forEach(item => console.log(item))
// numbers.forEach(rohim => console.log(rohim * 2))

// const a = numbers.map(korim => korim * 2)
// const b = numbers.forEach(korim => korim * 2)  ///return kore na

// // console.log('A: ', a);
// // console.log('B: ', b);

 const marks = [12, 32, 25, 75, 13, 54, 97, 25];

// const result = marks.find(item => item > 20)
// // console.log(result)        // potom jake pabe oita sudu dibe

// // 2 == '2' // true
// // 2 === '2' // false


 const boro = marks.filter(item => item > 20 && item % 2 === 0);
// console.log(boro);   // // jake pabe tara sob re dibo array the

// console.log(21 % 2)



