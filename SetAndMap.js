/*Set: Set is the collection of unique data/values
syntax:
variable_name=new Set();
variable_name.add(value)

Map: Map is a key:value pair
syntax:
variable_name=new Map();
variableName.set("id","21ECR224")
*/
//SET
//example 1 
setExample = new Set(["AIADMK","BJP","Congress"])
console.log(setExample)
setExample.add("DMK")
setExample.add("AIADMK")
console.log(setExample)

//for of loop
for(const value of setExample)
{
    console.log(value)
}

//for in loop
for(key in setExample)//no output
{
    console.log(key)
}

//MAP
mapEg=new Map([
    ["id","21ECR224"],
    ["Name","Vini"]
])
console.log(mapEg)

//for of loop
for(const value of mapEg)
{
    console.log(value)
}

//for in loop
for(key in mapEg)//no output
{
    console.log(key)
}

console.log(mapEg.has("name1"))

mapEg.set("Age","20")
mapEg.set("Phone","9500802729")
console.log(mapEg)

mapEg.delete("Phone","9500802729")
console.log(mapEg)
