// 1. user give input then convert fuctirial output

function inputFactarial (num){
  if(num === 0 || num === 1){
    return false
  }

  let result= 1
  for(let i = 2; i <= num; i++ ){
    
     result = result * i
   
  }

  return result
}


const value = inputFactarial(5)





// 2. write fucntion check input event or odd number 

function isNumberCheck ( input ){
  if(input % 2===0){
    console.log("this is even and jor number")
  }else{
    console.log("odd number", input)
  }
}




// math 
// akti compnay te 30 kg tips make hoy . 1 kg te 50 hajar pice tips hoy . 1 peket tips make korte lage 20 pice oii factorite kto peket tips make hoy? 



function howPeket (n){
  const perkgTips = 50000
  const totalKgTips = n * perkgTips

  const onPicepaket = 1 / 20
  const totalPeket = totalKgTips * onPicepaket
  
  return totalKgTips  
}

const result = howPeket(100)




// 2.akti tangki a 100 litters pani daron komota ase ,ak jon manuser gosol korte lage 2 balti pani. ak banlti pani lage 4 litter, koto jon manus gosol krte perbe.

    


//3. Print the multiplication table with 4   = OUTPUT: 4 * 1 = 4
// 4.Print all the multiplication tables with numbers from 1 to 10
// 5.  Calculate the sum of numbers from 1 to 10 // array number
// 6.Calculate the sum of odd numbers greater than 10 and less than 30
// 7.Create a function that will convert from Celsius to Fahrenheit
//  8. Calculate the average of the numbers in an array of numbers
// 9. Create a function that receives an array of numbers and returns an array containing only the positive numbers by? for loop/for of loop / filter 
// 10.Find the maximum number in an array of numbers
// 11.Calculate the sum of digits of a positive integer number
// 12.Rotate an array to the left 1 position/ shift, unshift, posh, pop
// 13.Reverse an array/ reverse method, for loop
// 14.Reverse a string /for loop 
// 15.Create a function that will merge two arrays and return the result as a new array/ 3 way solve 
// 16.  Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
// 17. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
// 18. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
// 19. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements/ unic element array thake nite hbe naw array return 
// 20. Calculate the sum of numbers received in a comma delimited string
// 21.Create a function to convert a CSV text to a “bi-dimensional/multipule” array te
// 22.Create a function that converts a string to an array of characters
// 23.Create a function that will convert a string in an array containing the ASCII codes of each character
// 24.Create a function that will convert an array containing ASCII codes in a string/ String.fromCharCode
// 25.Create a function to calculate the distance between two points defined by their x, y coordinates
// result : 360.5551275463989 /math.sqrt(gun pluz)
// input:  100, 100, 400, 300

// 26.Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
// let ar = [ ["John", 120],
//             ["Jane", 115],
//             ["Thomas", 123],
//             ["Mel", 112],
//             ["Charley", 122]
//          ];


// 27.Create a function that will convert a string containing a binary number 
// input: "11111111"
// result: 255

// 28.Create a function to calculate the sum of all the numbers in a jagged array
// input: [1, 2, [15, [23], [5, 12]], [100]]
// result: 158

// 29. Find the maximum number in a jagged array of numbers or array of numbers
// input: [[1, 2, 3], [40, 52], [6, 7, 8, 9]]
// result: 52


//30.string eash word asynding order make / small to big
// input: "java is a programming laguase"
// output: "a is java lanusge programming"

// 31. string convert eash word reverse 
  // input: "love bangladesh"
  // output: "evol hsedalgnab"

// 32.false value remove from array // duplicates value remove
// 33.asynding order number from array 

//1 my custom difind object use this keyword
var myCustomObj = {
  name: 'Zonayed Ahmed',
  age: 21,
  job: 'Student',
  anotherObj: {
     name: 'Ahmed Zonayed',
     value: function ()  {
        console.log( this);
     }
  }
}



//2 working asyncouns prosess 
function getValue () {
  var x;
  setTimeout(() =>{
    x = 100
  },1000)
  return x
}
// result is undefined dibe



const sowfterEngineer = () =>{
  setTimeout(()=>{
    console.log("software engineer")
  },3000)
}


const webDeveloper = () => {
   console.log("web Developer")
}


//3. handle Promise 
const makePromise = (control) =>{
  return new Promise((res, reject) => {

      setTimeout(() =>{
        if(control){
          res("Succefull data in Server")
        }else{
          reject("promise is reject")
        }
      },1000)
  })
}


makePromise(true)
.then((res) => {
 
})
.catch((er) => console.log(er))


//4. maltipule Promise handle 
const promise1 = (control) =>{
    return new Promise ((resolve, reject ) => {
       setTimeout(() =>{
         if(control){
          resolve("success promise 1")
         } else{
          reject("reject promise 1")
         }
       },1000)

       
    })
}


const promise2 = (control) => {
   return new Promise((resolve, reject ) => {

       setTimeout(() => {
         if(control){
          resolve("Succes promise 2")
         }else{
          reject("Reject Promise 2")
         }
       },1000)
   })
}


Promise.all([promise1(true), promise2(true)])
.then((res)=> console.log(res))
.catch((err)=> console.log(err))








var valu;
setTimeout(function() {
 valu = 12;
}, 3000)
// result is undefined 




//5. Error handleling 
try{
  // console.aula('This is an error');
  // throw new Error( "throw error massage" )
  // throw "your are error khaiso"
}catch(err){
  console.log("error", err)
}finally{
  // console.log("ata always run korbe")
}


//6. callback complex thke async await use korbo syncrouns vbe ans error handling korbo
const promiseOne = (control) => {
  return new Promise((resolve, reject) => {
       setTimeout(() => {
        if(control){
          resolve("promise one resolve")
        }else{
          reject("promise one reject")
        }
       },1000)
  })
}


const promiseTwo = (control) => {
     return new Promise ((resolve, reject) => {
       setTimeout(() =>{
        if(control){
          resolve("promise two resolve")
        }else{
          reject("promise two reject")
        }
       },1000)
     })
}

promiseOne(true)
.then((res) => console.log(res))
.catch((err) => console.log(err))

promiseTwo(true)
.then((res)=> console.log(res))
.catch((res)=> console.log(res))



async function multipulePromiseHandle () {
  const data = await Promise.all([promiseOne(true), promiseTwo(true)])
  console.log(data)
}




// 7.multipule callback function use is complex code:
const getName = new Promise((resolve, reject)=>{
   return resolve("shuvo")
})

const getAge = (name) =>{
  return new Promise((resolve, reject) => {
       setTimeout(() => {
         if(name === "shuvo"){
          resolve(22)
         }else{
          reject(10)
         }
       },3000)
  })
}

getName
.then((name)=> {
   getAge(name).then((age) => {
    console.log("My name is", name , "is age ", age)
   })
})



for( let i = 1 ; i <=10; i++){
   let line = `4 * ${i}  = ${4 * i}`
   console.log(line)
}





