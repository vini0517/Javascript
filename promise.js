/*promise: 
1.In callback,we are not so sure that the code will get executed in mentioned/setted time.
2.Due to this user/developer/customer doesn'tknow whta is happenning.That's why we are going for promise
new object() --> new Promise()*/

//Summa eg
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

//Authentication eg
function Login() {
    return new Promise(function (response, noresponse) {
      setTimeout(function () {
        if (isAuthenticated()) {
          response("Your Authentication is Successful");
        } else {
          noresponse("Your Authentication is not Successful");
        }
      }, 1000);
    });
  }
  Login()
    .then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });

//google map eg
function islocationvalid() {
  var v = "Melbourne"
  if (v == loc) {
    return true
  }
  else {
    return false
  }
}
function location(response, error) {
  return new Promise(function (response, errormsg){
    setTimeout(function () {
      loc = "Melbourne"
      console.log("the location is", loc)

      if (islocationvalid) {
        return response("location found")
      }
      else {
        return errormsg("location not found")
      }


    }, 2000)
  })

  }

location().then(
  function (response) {
    console.log(response)
  }
).catch(
  function (errormsg) {
    consolelog(errormsg)
  }
)


