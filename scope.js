// javaScript 3 ta scope 
// 1. Global scope 
//2. Local scope
//3. Block scope

// global mane baire use kolle je kunu jaygay pawa jay
// const x = 5;
// if(true){
//     console.log(x)
// }
// console.log(x);   // 5    //  5


// block ar let ba const dile baire pawa jabe na ...............but var dile baire pawa jabe-----------
// {
//     const y = 10
//     console.log('inside of:',y);   // 10
// }
// console.log('outside of :', y);   //ReferenceError: y is not defined



// let y = 15
// {
//      y = 10
//     console.log('inside of:',y);   // inside of: 10
// }
// console.log('outside of :', y);   // outside of : 10


//{}  ar modde ja takbo tai olo local scope
//************* */block scope var dile global a use koray jay ..........but function a bitore jai dew baire pawa jabe na tik ace
function  add(){
    const total = 3+5;
    // console.log('inside result',total);  // inside result 8
};
add()
//  console.log('outside result',total);    //ReferenceError: total is not defined