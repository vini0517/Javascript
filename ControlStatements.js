//looping
//for loop

Sum=0
for(var i=0;i<10;i++)
{
    Sum += i
}
console.log(Sum)

//while loop
i=0
//sum=0
while(i<10){
    Sum += i
    i++
}
console.log(Sum)

//do...while
i=0
//sum=0
do{
    Sum += i
    i++
}while(i<10);
console.log(Sum)


//example 1
arr = [10,20,30]//valid
console.log(arr.length)
for(i=0;i< arr.length;i++)
{
    console.log(arr[i])
}

//example 2
arr = [10,20.5,30]//valid
console.log(arr.length)
for(i=0;i< arr.length;i++)
{
    console.log(arr[i])
}

//example 3
arr = [10,20,true,false]//valid
console.log(arr.length)
for(i=0;i< arr.length;i++)
{
    console.log(arr[i])
}


//example 4
arr = [10,20,"string",false]//valid
console.log(arr.length)
for(i=0;i< arr.length;i++)
{
    console.log(arr[i])
}


//for in loop: works based on index (important loop)
arr = [10,20,"string",false,30]
for (const index in arr)
{
    console.log("The value present in",index,"is",arr[index])

}

//for of loop
arr = [10,20,"string",false,30]
for (const value of arr)
{
    console.log(value)

}

//forEach loop

//example 1:
arr = [10,20,"string",false,30]
arr.forEach(value => {
    console.log(value)
});


//example 2
var kongu = new Object()
kongu["Fees"] = 10000
kongu["Accomodation"] = "Excellent"
kongu["Food"] = "Pretty Decent"
kongu["HostelCount"] = 10
console.log(kongu)

//for in gives output:key
for(value in kongu)
{
    console.log(value)
}

for(key in kongu)
{
    console.log(key,kongu[key])//to access value
}

//forEach
kongu.forEach(key,element =>{
    console.log(key,element)
})



