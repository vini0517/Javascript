//Local scope
for(var i=0;i<5;i++)
{
    console.log(i+10)
}
console.log(i)

//Global scope
var a=10
{
    let a=5
    let b=5
    console.log(a,b)
}
console.log(a)

