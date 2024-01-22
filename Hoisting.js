//Hoisting

//example 1
console.log(a) // ReferenceError: a is not defined


//variable hoisting
//example 2
console.log(a) // undefined
var a=10

//example 3
console.log(a) 
let a=10   //ReferenceError: Cannot access 'a' before initialization


//Function hoisting
//example 4
konguclg()  //ReferenceError: konguclg is not defined

function konguclg(){   //Blank output
}


//example 5
konguclg(2,6)  //works perfectly
function konguclg(a,b)
{
    console.log("Function with argument")
    for(i=a;i<b;i++)
    {
    if(i%2==0){
    console.log("The num "+i+" is even.")
    }
    else{
        console.log("The num "+i+" is odd.")
    }
    }
}
