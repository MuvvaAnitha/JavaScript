//block of code can be executed together by wrapping them in a module called function.

function add(a,b)
{
    return a+b
}
let sum =add(2,3)
console.log(sum)

//do not have name => anyonymus function -- function expressions

let sumofIntegers= function(c,d)
{
    return c+d
}

//=> fact by shorthand operator

let sumofnumbers=(c,d)=>c+d
console.log(sumofnumbers(2,3))

