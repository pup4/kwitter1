user_name=localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

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
  
//ADD YOUR FIREBASE LINKS HERE

function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      
      console.log("Room Name - "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row;
      
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}