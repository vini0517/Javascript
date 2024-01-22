//How will you declare objects?
//1st way
var CustomerDetails={
    "Name":"Vini",
    "Age":20,
    "Phone":"9500802729" // "," is optional for your last key:value pair
}

console.log(CustomerDetails)
CustomerDetails["id"]="21ECR224"
console.log(CustomerDetails)
/*Why output key does not contain any quotes?
   key will not quote as it is inbuiltly present*/

//2nd way
var CustomerDetails = {}
CustomerDetails["id"]="21ECR224"
CustomerDetails["Name"]="Mythili"
CustomerDetails["Age"]="20"
CustomerDetails["Phone"]="9500802729"
console.log(CustomerDetails)

//3rd way

//example 1:
var kongu = new Object()
kongu["Fees"] = 10000
kongu["Accomodation"] = "Excellent"
kongu["Food"] = "Pretty Decent"
kongu["HostelCount"] = 10
console.log(kongu)
//Object access
console.log(kongu.Food)//"." is acting as path inside the object
console.log(kongu["HostelCount"])




/*casing:
1.normal casing
2.camel casing
3.pascel casing
*/




