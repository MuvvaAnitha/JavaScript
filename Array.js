//Array is a collection of elements
// var array =[10,20,30,40,50,60]
// subarray =array.slice(2,5)
// console.log(subarray)

// console.log(array[2])//30

// array[3] = 80
// console.log(array)//[10,20,30,80,50,60]

// console.log(array.length)//6

// array.push(65) //Element added at the end of the array

// console.log(array)//[10,20,30,80,50,60,65]

// array.pop()//[10,20,30,80,50,60] Removed last item

// array.unshift(12)//Element added at the start of the array
// console.log(array)

// console.log(array.indexOf(80))

// console.log(array.includes(67))//whether an array includes a certain element returning true or false as appropriate. 

var array =[10,20,30,40,50,60]
var sum =0
for(let i=0;i<array.length;i++)
{
    //console.log(array[i])
    sum = sum + array[i]
}
console.log(sum)


//reduce filter map

let total =array.reduce((sum,array)=>sum+array,0)
console.log(total)


var scores = [12,13,14,16]
//create new array with even numbers of scores array[12,14,16]
var evenscores =[]
for(let i=0;i<scores.length;i++)
{
    if(scores[i]%2 ==0)
    {
        evenscores.push(scores[i])
    }
}
console.log(evenscores)
      // (or)

let newfilterEvenscores=scores.filter(score=>score%2==0)
console.log(newfilterEvenscores)//[12,14,16]

//map 

let mappedArray=newfilterEvenscores.map(score=>score*3)
console.log(mappedArray)//[36,42,48]
let totalval=mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalval)


var score1 =[12,13,14,16]
let sumvalue=score1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumvalue)

let fruits=["banana","mango","apple","pomegrante"]
console.log(fruits.sort())
console.log(fruits.reverse())

var score1= [12,003,19,16,14]
console.log(score1.sort((a,b)=>a-b))