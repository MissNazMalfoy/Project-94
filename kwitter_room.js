var firebaseConfig = {
    apiKey: "AIzaSyCvVLExxwGRfJvgvkGFxPPEMTCDByEmUxQ",
    authDomain: "kwitter-190c1.firebaseapp.com",
    databaseURL: "https://kwitter-190c1-default-rtdb.firebaseio.com",
    projectId: "kwitter-190c1",
    storageBucket: "kwitter-190c1.appspot.com",
    messagingSenderId: "800258725792",
    appId: "1:800258725792:web:95f72b736f2c18384036c5"
  };

  firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
  