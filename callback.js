/*
1.similar to recursion
2.return or replay
A callback function is embedded inside/called by another function through parameters.
*/
function isAuthenticated() {
    return Math.random() < 1;
  }
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
  Login().then(function (message) {
      console.log(message);
    })
    .catch(function (message) {
      console.log(message);
    });