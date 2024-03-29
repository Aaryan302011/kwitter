
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBZ8NoNEVX74qHPpwtxIou7J5Uja3mGga8",
      authDomain: "kwitter-fe90f.firebaseapp.com",
      databaseURL: "https://kwitter-fe90f-default-rtdb.firebaseio.com",
      projectId: "kwitter-fe90f",
      storageBucket: "kwitter-fe90f.appspot.com",
      messagingSenderId: "161269937553",
      appId: "1:161269937553:web:fcf4bbe2847d8e42bfd630",
      measurementId: "G-ZVGZVQJ9MW"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!" ;
    function addRoom()
    {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"     
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}