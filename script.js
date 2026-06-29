document.getElementById("signupForm").addEventListener("submit", function(e){

    let username = document.querySelector("input[name='username']").value.trim();
    let password = document.querySelector("input[name='password']").value.trim();
    let confirmPassword = document.querySelector("input[name='confirmpassword']").value.trim();
    let email = document.querySelector("input[name='email']").value.trim();
    let firstName = document.querySelector("input[name='firstName']").value.trim();
    let lastName = document.querySelector("input[name='lastName']").value.trim();
    let terms = document.querySelector(".terms input").checked;

    let errorMsg = document.getElementById("errorMsg");

    errorMsg.innerHTML = "";

    // Empty fields check
    if(username === "" || password === "" || confirmPassword === "" || email === "" || firstName === "" || lastName === ""){
        errorMsg.innerHTML = "All fields are required.";
        e.preventDefault();
        return;
    }

    // Password length
    if(password.length < 6){
        errorMsg.innerHTML = "Password must be at least 6 characters.";
        e.preventDefault();
        return;
    }

    // Password match
    if(password !== confirmPassword){
        errorMsg.innerHTML = "Passwords do not match.";
        e.preventDefault();
        return;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.match(emailPattern)){
        errorMsg.innerHTML = "Please enter a valid email address.";
        e.preventDefault();
        return;
    }

    // Terms checkbox
    if(!terms){
        errorMsg.innerHTML = "You must agree to the Terms of Service.";
        e.preventDefault();
        return;
    }

});