  
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


  document.getElementById("btnSignUp").addEventListener('click', e=>{
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPassword").value;
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
   console.log(error.message);
    // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  });
})

  document.getElementById("btnLogin").addEventListener('click', e=>{
  const email = document.getElementById("txtEmail").value;
  const password = document.getElementById("txtPassword").value;
  const promise = firebase.auth().signInWithEmailAndPassword(email, password);
  promise.catch(e=>{ console.log(e.massage)})
})

firebase.auth().onAuthStateChanged(user=>{ 
  if(user){
    document.getElementById("btnLogOut").classList.remove('hide')
  } else{
    document.getElementById("btnLogOut").classList.add('hide')
  }
})

document.getElementById("btnLogOut").addEventListener('click', e=>{
  firebase.auth().signOut();
  console.log('logged out')
})

  const database = firebase.database()

	$(document).ready(function(){
		//Add smooth scrolling to all links in navbar + footlink
		$(".navbar a, footer a[href='#myPage']").on('click', function(event){
			//Make sure this.hash has a value before overriding default behavior
			if (this.hash !== "") {
				//Prevent default anchor click behavior
				event.preventDefault();

				//Store hash
				var hash = this.hash;

				//Uisng jQuery's animate() method to add smoooth  page scrill
				//The optional number (900) specifies the number of milliseconds it takes to scroll to the specified are
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 900, function(){
			
			    //Add hash(#) to URL when done scrolling (default click behavior)
			    window.location.hash = hash;
				});
			}//End if
		});

    $(window).scroll(function(){
      $(".slideanim").each(function(){
        var pos = $(this).offset().top;

        var winTop = $(window).scrollTop();
          if (pos < winTop + 600) {
            $(this).addClass("slide");
          }
      });
    });

	})

