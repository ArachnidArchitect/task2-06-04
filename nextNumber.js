// just add a button
// create a function that prints the next number in the array everytime it is run without using a for loop
let myArray = [2,5,7,10,50]
let i = 0
function nextNumber(){
 console.log(myArray[i])
 console.log('i is curruntly:'+ i)
 if (i == myArray.length-1) {
     i = 0
     }else{
        i++
     }
}
// //test below:
nextNumber()
nextNumber()
nextNumber()
nextNumber()
nextNumber()
nextNumber()
nextNumber()
nextNumber()







