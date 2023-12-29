const form=document.querySelector('form')
form.addEventListener("Submit",(e) =>{
    e.preventDefault()
    const username=form.username.value
    const password=form.password.value
    const authentication=authentication(username,password)
    if(authentication){
        window.location.href="logout.html"
    }
    else{
        alert("wrong")
    }
})
function authentication(username,password){
    if(username==="admin"&&password==="password"){
        return true
    }
    else{
        return false
    }
}