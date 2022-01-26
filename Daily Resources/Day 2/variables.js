//using var keyword 

var a= 4
var b= 6
const x= 8

c= a+b 
console.log(c)
var a= 6
console.log(a)


function variable() {


    let x= 5;
    console.log (x);

}
variable();

//using let keyword

if(a<b)
{
    let x=23
    console.log(x);
}

let y= 45;
console.log(y);
y=50;       // will be updated
console.log(y);


//using const keyword

const car ="BMW"
console.log(car)
car = 10
console.log(car)  // will not be updated because of const keyword
