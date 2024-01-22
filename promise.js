/*
promise: 
1.In callback,we are not so sure that the code will get executed in mentioned/setted time.
2.Due to this user/developer/customer doesn'tknow whta is happenning.That's why we are going for promise
new object() --> new Promise()
*/
function mattikittaRaja() {
    return 0;
}
function tomJerry(welcomeMessage,callback){
    return new Promise(function(thambiPoidu,unThalavidhi){
        setTimeout(function(){
            if(mattikittaRaja()){
                unThalavidhi("Odi poiru vanthudatha da thambi!!!")
            }
            else{
                console.log("Thappichuta")

            }
        },1000)
    })
}

function motuPatlu(){
    console.log("Odi poiru vanthudatha da thambi!!!")
}

tomJerry("Hello Tom and Jerry\nWelcome to KEC",tomJerry)



