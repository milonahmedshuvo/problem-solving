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



 










