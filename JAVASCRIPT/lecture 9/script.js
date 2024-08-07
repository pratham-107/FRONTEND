// let div = document.querySelector('div')

// let p = document.createElement('h1')
// let h5 = document.createElement('h5')
// let id = document.createAttribute('class')


// h5.innerText = "hey"
// p.innerText = "hello"

// div.append(p,h5,)
// console.log(div);

//1st//
// let btn = document.querySelector('button')
// function fun1(){
//     console.log("heyyyyyyy");
    
// }


//2nd//
// btn.onclick = function(){
//     console.log("hiiiiiiii");
// }

//3rd//
//  btn.addEventListener('click',()=>{
//     console.log('heyyyyy');
//  })


// let div = document.querySelector('div')
// let inp = document.querySelector('input')
// inp.document.addEventListener('input', (e)=>{
//     console.log(e.target.value);
//     div.innerText = e.target.value
// })

let inp = document.querySelector('input')
let form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(inp.value);
})