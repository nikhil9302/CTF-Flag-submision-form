// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs6MMPTM3zmug4qjd7xTtaLh9-ISK2G80",
    authDomain: "ctf-flag-c13d0.firebaseapp.com",
    projectId: "ctf-flag-c13d0",
    storageBucket: "ctf-flag-c13d0.appspot.com",
    messagingSenderId: "640364165653",
    appId: "1:640364165653:web:7d6f1b844767fdad65ac1c"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
var fs = firebase.firestore()
const db = fs.collection("ctfData")

let submitButton = document.getElementById('submit')

submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault()  
    //Get Form Values
    let firstName = document.getElementById('fname').value  
    let Round = document.getElementById('round').value
    let Flag = document.getElementById('flag').value   
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    db.doc().set({
        fname: firstName,        
        round_number: Round,
        flag: Flag,
        time: dateTime
      }).then( () => {
        console.log("Data saved")
      }).catch((error) => {
        console.log(error)
      })    
    //alert
    alert("Your Flag Has Been Submitted Successfully")
  })
