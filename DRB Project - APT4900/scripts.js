  
  var firebase = require("firebase");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBkkA0-V-4Np_Ij_PQci1l2A6wDubl6Qtc",
    authDomain: "my-awesome-project-61389.firebaseapp.com",
    databaseURL: "https://my-awesome-project-61389.firebaseio.com",
    projectId: "my-awesome-project-61389",
    storageBucket: "my-awesome-project-61389.appspot.com",
    messagingSenderId: "1008861419190",
    appId: "1:1008861419190:web:4f88d4465a47694d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  window.onload = function(){
    var signup = document.getElementById("btnSignUp");
    if(signup){
      signup.addEventListener('click', e=>{
      const email = document.getElementById("txtEmail").value;
      const password = document.getElementById("txtPassword").value;
      if(email.length < 4){
        alert("Invalid email");
      }
      if(password < 3){
        alert("Password too short");
      }
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
   console.log(error.message);
    // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });
    }
  }
  
  


 
