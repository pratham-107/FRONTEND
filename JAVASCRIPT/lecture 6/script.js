// callback function //


// function outer (a){
//     console.log('hey!');
//     console.log(a);
//     a()
// }
// outer (function inner(){
//     console.log('inner');
// })

// asynchronous //
// console.log('two');
// setTimeout(()=>{
//     console.log('one');
// },2000)

let count = 0;
let id = setInterval(()=>{
  console.log('hey!')
  count++                  //This line increments the count variable by 1 each time the interval is executed.//
  if(count >= 10){
    clearInterval(id);
  }
},500);
