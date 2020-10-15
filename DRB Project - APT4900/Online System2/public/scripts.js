//To do the show/hides in the registration form that are relevant fields
function showDiv(divId, element)
{
    document.getElementById(divId).style.display = element.value == "recruiter" ? 'block' : 'none';
}

function showDiv2(divId, element)
{
    document.getElementById(divId).style.display = element.value == "company" ? 'block' : 'none';
}

  // Reference general user details collection
      var userDetails = firebase.database().ref('userdetails');

//Function to capture form details and send to firebase
      function sendUserDetails(surname, otherNames, usertype, nationality, phone, email) {
      let newUserDetails = userDetails.push();
      newUserDetails.set({
        username: surname,
        names: otherNames,
        //gender: gender,
        usertype: usertype,
        nationality: nationality,
        //id: Id,
        phoneNumber: phone,
        email: email
      });
    }

window.onload = function(){

  //Handles user registration
  var signup = document.getElementById("btnSignUp");
  
  if(signup){
    signup.addEventListener("click", function(){
      const email = document.getElementById("txtEmail").value;
      const password = document.getElementById("txtPassword").value;

      var surname = document.getElementById("surname").value;
      var otherNames = document.getElementById("othernames").value;
      //var gender = document.getElementById("gender").value;
      var usertype = document.getElementById("usertype").value;
      var nationality = document.getElementById("nationality").value;
      //var Id = document.getElementById("Id").value;
      var phone = document.getElementById("phone").value;
      
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        
       // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        //USE WHEN YOU WANT TO DETECT ERRORS GENERATED DURING SIGNUP
        console.log(errorCode);
        console.log(errorMessage);
        // ...
  });

      //Call send function to send details to firebase
      sendUserDetails(surname, otherNames, usertype, nationality, phone, email);

      //reload page after submit
      //window.location.reload();

      //redirect user to signin page
      //window.location = "login.html";

      //redirect user based on usertype chosen
      //change html pages to suit preferred behaviour
      if(usertype == "driver"){
        window.location = "driverprofile.html";
      }
      if(usertype == "recruiter"){
        window.location = "recruiterlanding.html";
      }
  
})
}
//Handles user sign in
var login = document.getElementById("btnLogin");

if(login){
login.addEventListener('click', function(){
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPassword").value;
 
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
   // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if(errorCode == "auth/wrong-password"){
          alert("Invalid password, try again");
        }
        if(errorCode == "auth/user-not-found"){
          alert("User does not exist!");
        }
        //USE WHEN YOU WANT TO DETECT ERRORS GENERATED DURING LOGIN
        //console.log(errorCode);
        //console.log(errorMessage);

        // ...

        
 });
  //Gets the current user 
  var user = firebase.auth().currentUser.uid;
  return firebase.database().ref('/userDetails/' + user).once('value').then(function(snapshot){
    var type = snapshot.val().usertype;
    console.log(type);
    //Checks if a user is logged in and directs to the landing page(specify in the if clause).
  //If they're not signed in, specify what happens in the else clause
  firebase.auth().onAuthStateChanged(function(user){ 
  if(type == "driver"){
    //document.getElementById("btnLogOut").classList.remove('hide')
    window.location = "driverlanding.html";
    alert("welcome " + user.username);
    
  } else{
    //document.getElementById("btnLogOut").classList.add('hide')
    }

}) 

  })
  //var type = user.usertype;
  //console.log(user);
  //if(user){
   // console.log("Hello " + user);
 // }

  

})
}

}
  
  


  