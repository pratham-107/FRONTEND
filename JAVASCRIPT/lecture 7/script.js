// function step1(fn,heee){
//     setTimeout(() => {
//         console.log('photo selected');
//         fn()
//     }, 5000);
// }

// function step2(fn){
//     setTimeout(() => {
//         console.log('filteer');
//         fn()
//     }, 4000);
// }

// function step3(fn){
//     setTimeout(() => {
//         console.log('captions added');
//         fn()
//     }, 3000);
// }

// function step4(fn){
//     setTimeout(() => {
//         console.log('photo posted');
//         fn()
//     }, 2000);
// }

// step1()
// step2()
// step3()
// step4()


//CALLBACK HELL//


// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })



//PROMISES//
//  let promise = new Promise((resolve, reject) => {


//     let reason ='barish'
//     if (reason == 'barish'){
//         reject('err')
//     }
//     else{
//         resolve('resolve')
//     }

//     // setTimeout(() => {
//         // resolve()
//         // reject()
//  })

//  console.log(promise,"hello world");

//  promise.then((a)=>{
//     console.log(a);
//  }).catch((err)=>{
//     console.log(err);
//  })





// <------PROMISE FUNCTION //----->
function step1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('photo selected');
            resolve();
        }, 5000);
    });
}

function step2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('filter applied');
            resolve();
        }, 4000);
    });
}

function step3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('caption added');
            resolve();
        }, 3000);
    });
}

function step4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('photo posted');
            resolve();
        }, 2000);
    });
}

// step1()
//     .then(() => step2())
//     .then(() => step3())
//     .then(() => step4())
//     .catch((error) => console.error('error occurred:', error));


//ASYNC AND AWAIT ///

async function magic(){
    let data= await step1()
    console.log(data);
    let data1= await step2()
    console.log(data1);
    let data2= await step3()
    console.log(data2)
    let data3= await step4
    console.log(data3)
    let data4 = await step4()
    console.log(data4)
}
magic()