document.getElementById("loginform").addEventListener("submit",(event)=>{
    event.preventDefault()
})
firebase.auth().onAuthStateChanged((user)=>{
    if(user)
    {
        location.replace("welcome.html")
    }
})
function login()
{
    const email=document.getElementById("email").value
    const password=document.getElementById("password").value
    firebase.auth().signInwithEmailAndPassword(email,password)
}
