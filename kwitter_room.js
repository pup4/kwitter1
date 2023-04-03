var firebaseConfig = {
      apiKey: "AIzaSyCFeuGSj2C5Bzlv4SoW84S5Eu0UPWwa5us",
      authDomain: "kwitter-eca32.firebaseapp.com",
      databaseURL: "https://kwitter-eca32-default-rtdb.firebaseio.com",
      projectId: "kwitter-eca32",
      storageBucket: "kwitter-eca32.appspot.com",
      messagingSenderId: "881595320738",
      appId: "1:881595320738:web:f378b12fb9f7ee2fe40afb"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

