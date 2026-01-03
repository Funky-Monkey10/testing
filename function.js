 // normal function

// function abc(){
//     console.log("This is function abc");
// }
// abc();

// // arrow function
// const xyz =()=> {
//     console.log("This is function xyz");
// }
// xyz();

// // arrow function with parameters
// const multiply = (a,b) => {
//     return a*b;
// }
// console.log("Product is: " + multiply(5,10));


// // nested function
// function outerFunction(){
//     console.log("This is outer function");
//     function innerFunction(){
//         console.log("This is inner function");
//     }
//     innerFunction();
// }
// outerFunction();


function hostel(studentName) {
  const fee = (amount) => {
    console.log(studentName + " has to pay ₹" + amount);
  };

  fee(50000000);
}

hostel("Sachin");

const multiply = (x, y) => x * y;
console.log("Product is: " + multiply(7, 8));