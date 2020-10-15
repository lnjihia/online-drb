// Reference general user details collection
var messagesRef = firebase.database().ref('userdetails');

var surname = document.getElementById("surname").value();
var otherNames = document.getElementById("otherNames").value();
//var gender = document.getElementById("gender").value();
var usertype = document.getElementById("usertype").value();
var nationality = document.getElementById("nationality").value();
//var Id = document.getElementById("Id").value();
var phone = document.getElementById("phone").value();
var email = document.getElementById("txtEmail").value();

//Function to capture form details and send to firebase
function sendUserDetails(surname, otherNames, gender, usertype, nationality, Id, phone, email) {
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

  //Call send function to send details to firebase
  sendUserDetails(surname, otherNames, gender, usertype, nationality, Id, phone, email);

  //Reference driver profile collection
  var messagesRef = firebase.database().ref('driverprofile');

  var gender = document.getElementById("gender").value();
  var driverlocation = document.getElementById("driverlocation").value();
  var drivercategory = document.getElementById("drivercategory").value();
  var contracttype = document.getElementById("contracttype").value();
  //find way to collect documenation (ID, CV, Valid DL, Recommendation Letter, Driving Certifications)

  //Function to capture profile details and send to firebase
  function sendDriverProfile( Id, gender, driverlocation, drivercategory, contracttype) {
  let newDriverProfile = driverProfile.push();
  newDriverProfile.set({
    id: Id,
    gender: gender,
    driverlocation: driverlocation,
    drivercategory: drivercategory,
    contracttype: contracttype
  });

  //Call send function to send driver profile to firebase
  sendDriverDetails( Id, gender, driverlocation, drivercategory, contracttype)


  //Reference employer inquiry collection
  var messagesRef = firebase.database().ref('employerinquiry');

  var worklocation = document.getElementById("worklocation");
  var recruitcategory = document.getElementById("recruitcategory")
  var contractneed = document.getElementById("contractneed");
  var preferences = document.getElementById("preferences");

  //Call send function to send recruitinquiry 
  function sendDriverDetails( Id, worklocation, recruitcategory, contractneed, preferences) {
  let newEmployerDetails = employerDetails.push();
  newEmployerDetails.set({
    id: Id,
    worklocation: worklocation,
    recruitcategory:recruitcategory,
    contractneed: contractneed,
    preferences: preferences
  });













