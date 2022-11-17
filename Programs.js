//print even numbers from 1 to 100 in javascript
for(let i=0;i<100;i+=2){
    console.log(i)    
}


//print odd numbers from 1 to 100 in javascript
//console.log(Array.from({ length: 50 }, (e, i) => (i * 2) + 1).join(' '))
for(i=0; i<=100; i++){
   if(i % 2 != 0){
  console.log(i);

   }
}


//print uppercase
var str ="welcome to javascript"
console.log(str.toUpperCase())

//Print prime numbers from 1 to 100 in javascript
for (var i = 0; i <= 100; i++) {

    var notPrime = false;
    for (var y = 2; y <= i; y++) {
        if (i%y===0 && y!==i) {
            notPrime = true;
        }
    }
    if (notPrime === false) {
                console.log(i);
    }
}



