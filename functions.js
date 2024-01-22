//Functions
//Example 1: Function without argument without return type

function fun()
{
    console.log("Function without argument")
}
fun()

//Example 2: Function with argument without return type

function fun(a,b)
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
fun(5,10)

// Example 3: Function with arguments and return type
function fun(a, b) {
    console.log("Function with return type");
    return a + b;
}
console.log(fun(2, 3));

// Example 2: Function without arguments and return type
function fun() {
    console.log("Function without return type");
}
fun();
