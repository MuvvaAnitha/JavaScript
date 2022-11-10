const flag = true

if(!flag)
{
    console.log("condition satisfied")
}
else
{
    console.log("condition not satisfied")
}

//Difference b/w if and while and do-while
//if:-If condition is true, this will get executed only one time.


let i=0
while(i<10)
{
    i++
    console.log(i)
}

//While:-If condition is true, this will get executed only one time.
//  If you don't have any requirement of executing once and then validate, then directly go with While loop

do
{
i++
}
while(i<10);
console.log(i)

//Do-While:-if you want to execute once and then monitor status, then go to do a loop.

for(let k=0;k<=10;k++)
{
    console.log(k)
}

//For:- When you know that, how many times you have to run this loop, 
//For:-you have to decide if it is like, you know,how many times you have to repeat look, then you can go for loop
let required = true
while(required)
{
    console.log(required)
    required=false
}
//while:-if you want to repeat loop based upon some condition evaluation, that if it becomes true or false go for while loop.

//from 1 to 10 give me common multiple values of 2 and 5
console.log("***************")
for(let k=1;k<=10;k++)
{
    if(k%2 == 0 && k%5 == 0) //common multiple 2 and 5
    if(k%2 == 0 || k%5 == 0) // 2 or 5
    {
        console.log(k)
    }
    
}
//I want only first to three digits only 

let n=0
for(let k=1;k<=100;k++)
{
    if(k%2 == 0 && k%5 == 0) 
    {
        n++
        console.log(k)
        if(n == 3)
        break
    }
    
}


























