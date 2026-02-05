function validateForm() {

    let username =
    document.getElementById("username").value;


    let password =
    document.getElementById("password").value;

    let confirmpassword =
    document.getElementById("confirmpassword").value;

    let email =
    document.getElementById("email").value;

    let terms =
    document.getElementById("terms").checked;

    if (user==="") {
        alert("username is required");
        return false;
    }

    if (password.length < 6){
        alert("Password must be atleast 6 characters");
        return false;
    }

    if (password !== confirfPassword)
    {
        alert("Passwords do not match");
        return false;
    }

    if (email===""){
        alert("Email is Required");
        return false;
    }

    if (!terms){
        alert ("Please accept Terma of Services");
        return false;
    }

    return true;
}