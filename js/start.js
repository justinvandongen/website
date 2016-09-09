/*var googleUser = {};
var startApp = function() {
  gapi.load('auth2', function(){
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: '956372344507-0mdgbf0j1ejpsiadg9t75cr5d3j9siua.apps.googleusercontent.com',
      cookiepolicy: 'single_host_origin',
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });
    attachSignin(document.getElementById('login-small'));
    attachSignin(document.getElementById('login'));
  });
};
var user;
function attachSignin(element) {
  auth2.attachClickHandler(element, {},
      function(googleUser) {
        user = googleUser.getBasicProfile().getName();
        console.log(user);
        $('#inloggen').html("<a href=\"#\" onclick=\"signOut();\" id=\"logout\">uitloggen</a>");
      }, function(error) {
        alert(JSON.stringify(error, undefined, 2));
      });
}
function currentUser(){
  console.log(user);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      $('#inloggen').html("<a href=\"#\" id=\"login\">inloggen</a>");
    });
}
*/
function werktNiet(){
  alert("deze functie werkt niet in de demo");
}
// TODO: inloggen google https://developers.google.com/identity/sign-in/web/sign-in
