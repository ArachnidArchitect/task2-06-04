// connect html
let input = document.querySelector('#numInp')
let addBtn = document.querySelector('#addBtn')
let nextBtn = document.querySelector('#nextBtn')
let htmlArray = document.querySelector('#arrDisp')
let display = document.querySelector('#currVal')

let userArray = []
function addToArray(val) {
   userArray.push(val)
   console.log(userArray)
   htmlArray.innerText = userArray
}

addBtn.addEventListener('click', ()=>{
   addToArray(input.value)
   console.log(input.value)
})

nextBtn.addEventListener('click', nextNumber)



// just add a button
// create a function that prints the next number in the array everytime it is run without using a for loop
let myArray = [2,5,7,10,50]
let i = 0
function nextNumber(){
display.innerText = userArray[i]
 console.log(userArray[i])
 console.log('i is curruntly:'+ i)
 if (i == userArray.length-1) {
     i = 0
     }else{
        i++
     }
}
// //test below:








