let enteredpassword, reenteredpassword, result;

function validate() {
    enteredpassword = document.getElementById("password").value;
    mail=document.getElementById("email");
    reenteredpassword = document.getElementById("confirmpassword").value;
    result = document.getElementById("show");
    const ep = enteredpassword;
    const rep = reenteredpassword;
    
    if (ep === rep) {
        result.innerText = "Password result Sucessfully";
        result.style.color = "Green";
        result.style.fontSize = "25px";
    } else {
        result.innerText = "Password Validation Failed";
        result.style.color = "red";
        result.style.fontSize = "25px";
    }
}

const resetbtn = document.getElementById("resets");
resetbtn.addEventListener("click", resetform);

function resetform() {
    enteredpassword = '';
    reenteredpassword = '';
    result.innerText = '';
    document.getElementById("password").value = '';
    document.getElementById("confirmpassword").value = '';
   document.getElementById("mail").value='';
}
