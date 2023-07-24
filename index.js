// Problem: Write a function to calculate the factorial of a given number.
// একটি প্রদত্ত সংখ্যার ফ্যাক্টরিয়াল গণনা করার জন্য একটি ফাংশন লিখুন


// function factorial(num) {
//     if (num === 0 || num === 1) {
//       return 1;
//     } else {


//       let result = 1;
//       for (let i = 2; i <= num; i++) {
//         result = result * i;
//       }
//       return result;
//     }
//   }
  
//   // Testing the factorial function
//   console.log(factorial( 5)); // Output: 120
  
//   console.log(factorial(0)); // Output: 1
//   console.log(factorial(1)); // Output: 1



// 2. Write a function to check if a given number is even or odd.
// প্রদত্ত সংখ্যাটি জোড় বা বিজোড় কিনা তা পরীক্ষা করার জন্য একটি ফাংশন লিখুন।

// function isEvenOrOdd(num) {

//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// // Testing the isEvenOrOdd function
// console.log(isEvenOrOdd(5)); // Output: Odd
// console.log(isEvenOrOdd(8)); // Output: Even
// console.log(isEvenOrOdd(0)); // Output: Even




// 3.string methods 
 
// const text = "i love bangladesh"
// console.log(text)


// const result = text.split(" ")    //  ['i', 'love', 'bangladesh']
// console.log(result.reverse())     // ['bangladesh', 'love', 'i']  
// console.log(typeof result)        //  object






// 4.Write a function to reverse a string
// একটি স্ট্রিং বিপরীত করতে একটি ফাংশন লিখুন



// function reverseString (str){
//   return str.reverse()
// }

// const agmnt= [1,2, 3, 4, 5]
// console.log(reverseString(agmnt))






// 5. Write a function to count the number of vowels in a string
// একটি স্ট্রিং এর স্বর সংখ্যা গণনা করার জন্য একটি ফাংশন লিখুন


  // function counStringtoVowels ( str ){

  //   const vowels = ["a", "e", "i", "o", "u"]
  //   let vowelCount = 0

  //   for(let i = 0; i <= str.length; i++ ){

  //     if(vowels.includes(str[i])){
  //       vowelCount ++
  //     }
  //   }
  //   return vowelCount
  // } 

  // console.log(counStringtoVowels("Hello, world!"))



  // 6. Write a function to find the largest element in an array
  // একটি অ্যারের মধ্যে সবচেয়ে বড় উপাদান খুঁজে পেতে একটি ফাংশন লিখুন


  // function bigElement ( arr ){

  //   let largesElement =arr[0]
  //   for(let i = 0; i <= arr.length; i++){
  //     if(arr[i] < largesElement){
  //       largesElement = arr[i]
  //     }
  //   }

  //   return largesElement
  // }

  // console.log(bigElement( [3,4,5,6, 14, 2, -1] ))



  // 7.Write a function to find the average of an array of numbers
  // সংখ্যার অ্যারের গড় বের করার জন্য একটি ফাংশন লিখুন।
  
  
  // function sumArray (arr) {
   
  //   let sum = 0
  //   for(let i = 0 ; i <arr.length; i++){
  //     sum = sum + arr[i]
  //     sum ++
  //   }

  //   return sum
  // }

  
  // console.log(sumArray([2,3, 5, 1, 3,44]))
 




// 8.Write a function to check if an array contains a specific element











// MERN Stack Web developer problem solving 

// // HTML
// <ul id="parent">
//   <li>Item 1</li>
//   <li>Item 2</li>
//   <li>Item 3</li>

// </ul>


// JavaScript
// const parent = document.getElementById('parent');

// parent.addEventListener('click', function(event) {
//   const target = event.target;
//   console.log(target.nodeName)
  

//   if (target.nodeName === 'LI' || "H1") {
//     console.log('Clicked on:', target.textContent);
//   }else{
//     console.log("Error, not found Big letter")
//   }
// });





// function invocation and call() 

// 1 invocation normal function call 
// myfunction()
// new myFunction()
// myObj.myFunction()


// 2. call method take one object that defind this 


// function parson ( ) {
//   console.log(this)
// }
// parson()


const parson ={
  //  fristname: "Milon",
  //  lastName: "Ahmed",


  fullname: function () {
       console.log(this.fristname+ ": " + this.lastName)
  }
}

const parson2 = {
  fristname: "jon",
  lastName: 'Dhooh'
  
}

// parson.fullname.call(parson2)
const maxNumber= Math.min.apply("ffff", [33, 21, 10, 34, 55, ])




// event call and addevent listener 

// function changeCountry(){

//     console.log(this)
//    const title= document.getElementById("title")
//    title.innerHTML="India"
  
// }


const title = document.querySelector('.title')

title.addEventListener("mousedown", function(){
  title.innerHTML = "success job"
})


title.addEventListener("mouseup", function (){
     title.innerHTML= "porishom koro"
})






// Array method Push, splice, slice, map, filter, forEach, /object tricks, / for loop, for in to object / for of array /reduce


/**************************************
 * 
 *                                         ******************************/ 





// 200 tk 40%

function parsen (parsen,tk){
  const result= tk * (parsen / 100) 
  const totalPrice= tk - result
  return totalPrice
}





const number= [2,3,4,5,6,7,10]
// const result = number.splice(1,3, 100 ) 
// 2..100, 6, 7, 10






// multipule function call asyncronuse handle 


function someAsyncOperation1 (){
     
     return "function1"
}
function someAsyncOperation2 (){
     return "function2"
}
function someAsyncOperation3 (){
     return "function3"
}


const promise1 = someAsyncOperation1();
const promise2 = someAsyncOperation2();
const promise3 = someAsyncOperation3();




Promise.all([promise1, promise2, promise3])
.then((result)=> {     
     console.log(result)
})
.catch((arr)=> {
     console.log(arr)
})






// Higher order function 

function multiplyBy(factor) {
     return function (number) {
       return number * factor;
     };
   }
   
   const multiplyByTwo = multiplyBy(2);
   const multiplyByThree = multiplyBy(3);
   
   console.log(multiplyByTwo(4)); // Output: 8
   console.log(multiplyByThree(5)); // Output: 15
   




// asyncouns prossess oparation manage****************

const fetchDatas = () => {

     return new Promise((resolve, reject) => {

       setTimeout(() => {
         const data = { message: 'Data fetched successfully' };
         // Simulating successful completion
         resolve(data);
         // Simulating failure
         // reject(new Error('Failed to fetch data'));
       }, 2000);
     });


   };
   
   fetchDatas()
     .then((result) => {
       console.log(result.message);
     })
     .catch((error) => {
       console.error(error.message);
     });
   



     
// asyncrouse prosces handle by callback function 
function fetchData(callback) {

     setTimeout(() => {
       const data = { message: 'Data fetched successfully' };
       // Simulating successful completion
       callback(null, data);
       // Simulating failure
       // callback(new Error('Failed to fetch data'));
     }, 2000);
   }
   

   function handleData(error, result) {
     if (error) {
       console.error(error.message);
     } else {
       console.log(result.message);
     }
   }
   
   fetchData(handleData);
   




// 11.Write a function to check if an array contains a specific element.

// function elementCheck (arr, target){
//       const result= arr.includes(target)
//       return result
// }

// const mynum= [3, 4,5,6]
// console.log(elementCheck(mynum, 5))





// 11.duplicates array element remove 
// function duplicates(arr){
//       return [...new Set (arr)]
// }
// console.log(duplicates([1, 2,3,4,2,3, 3, 3]))




// 12.Write a function to sort an array of numbers in ascending order.

// function shortArray (arr){
//      return arr.sort((a, b) => a - b)
// }

// console.log(shortArray([2,4,3,3,200,1,30, 56]))





// 13Write a function to check if two arrays are equal.

function arraysAreEqual(arr1, arr2) {
         
     for (let i = 0; i < arr1.length; i++) {
       if (arr1[i] !== arr2[i]) {
         return false;
       }
     }
   
     return true;
   }

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
// const array3 = [1, 2, 4];

// console.log(arraysAreEqual(array1, array2)); // true
// console.log(arraysAreEqual(array1, array3)); // false


// 14.Write a function to remove falsy values from an array

function removeFalsyValues(arr) {
 const result= arr.filter(Boolean);
 
 return result
}


// 15.Write a function to remove falsy values from an array
function removeTrueValues(arr) {
 return arr.filter((value) => value !== true);
}

// const myArray = [0, false, '', null, undefined, NaN, 42, 'OpenAI', true];
// const filteredArray = removeFalsyValues(myArray);
// console.log(filteredArray); // [42, 'OpenAI', true]






// 16.Write a function to find the index of a specific element in an array

function findElementIndex(arr, target) {
 return arr.indexOf(target);
}







