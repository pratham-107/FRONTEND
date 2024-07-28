let data=[
    {
        id:1,
        name:'rahul'
    },
    {
        id:2,
        name:"modi jii"
    },
    {
        id:3,
        name:"mamta"
    }
]

let datafilter= Data.filter((a,b,c) =>{
    return a.id>1
})
console.log(a);

// data.map((a)=>{
//     console.log(a);
//     // console.log(a.name);
//     // console.log(a.id);
// })

// let arr=[1,2,3,4,5,6,7,8,9]
// let sum=0

// let newD= arr.filter((a)=>{
//     return a>2
// })

// let newDDD= newD.map((data)=>{
//     return data%2==0
// })

// console.log(newDDD,"2");
// let Sum= newDDD.reduce((acc,b)=>{
//     console.log(acc+b);
//     return acc+b
// })

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Filter the array to get numbers greater than 2 and even
// let evenNumbers = arr.filter((a) => {
//   return a > 2 && a % 2 == 0;
// });

// console.log(evenNumbers, "even");

// // Reduce the filtered array to get the sum of the even numbers
// let Sum = evenNumbers.reduce((acc, b) => {
//   return acc + b;
// }, 0); // Initialize the accumulator to 0

// console.log(Sum);

//map function//
// let numbers = [1, 2, 3, 4, 5];

// let result = numbers.filter((num) => {
//   return num > 3;
// }).map((num) => {
//   return num * 2;
// });

// console.log(result); // [8, 10]

// let dataa=  [
//     {
//       "id": 1,
//       "name": "John Doe",
//       "email": "john.doe@example.com",
//       "age": 28,
//       "address": {
//         "street": "123 Main St",
//         "city": "Anytown",
//         "state": "CA",
//         "zip": "12345"
//       }
//     },
//     {
//       "id": 2,
//       "name": "Jane Smith",
//       "email": "jane.smith@example.com",
//       "age": 32,
//       "address": {
//         "street": "456 Oak St",
//         "city": "Somewhere",
//         "state": "NY",
//         "zip": "67890"
//       }
//     },
//     {
//       "id": 3,
//       "name": "Emily Johnson",
//       "email": "emily.johnson@example.com",
//       "age": 24,
//       "address": {
//         "street": "789 Pine St",
//         "city": "Elsewhere",
//         "state": "TX",
//         "zip": "11223"
//       }
//     }
//   ]

//   let cities = dataa.map((item) => {
//     return item.address.city;
//   });
  
//   console.log(cities); 
  
//   let city = data.map((a) => {
//     return a.address.city
//   })
 
//   console.log(city);


let number = Math.random() * 1000;
console.log(Math.floor(number));

// let dateTime = new Date().toLocaleString();
// console.log(dateTime);

// let currentTime = new Date().toLocaleString();
// console.log(currentTime);

let currentDate = new Date().toLocaleDateString();
let currentTime = new Date().toLocaleTimeString();

console.log("Current Date: ", currentDate);
console.log("Current Time: ", currentTime);