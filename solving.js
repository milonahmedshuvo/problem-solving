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

    


//3. Print the multiplication table with 4
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
// 21.Create a function to convert a CSV text to a “bi-dimensional” array
// 22.Create a function that converts a string to an array of characters
// 23.Create a function that will convert a string in an array containing the ASCII codes of each character
// 24. Create a function that will convert an array containing ASCII codes in a string/ String.fromCharCode

