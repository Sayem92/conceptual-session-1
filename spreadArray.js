const numbers = [12, 58, 14, 26, 2, 8, 9, 10]
const numbers2 = [122, 508, 141, ];

const newArray = [1000, ...numbers,50505050, ...numbers2, 99999999999];
//  console.log(newArray);


// console.log(Math.min(...numbers));          // 2
// console.log(Math.max(...numbers));              // 58

// destructuring array --------------------------------------------------------------------------------
// kial koro--

// const [a,b,...d] = numbers;
// console.log(a,b,d);    //  12 58 [ 14, 26, 2, 8, 9, 10 ]

//-----------------------------copy array--------------
const a = [1, 2, 3];
const b = [...a];  // akon push kolle ak jone pabe

// const b = a;
//  a.push(88)           // 2 jone pay somadan olo
// b.push(90)

console.log('a:', a);
console.log('b:', b);