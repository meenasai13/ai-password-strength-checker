function checkPassword() {

    let password = document.getElementById("password").value;

    let strengthBar = document.getElementById("strength-bar");
    let message = document.getElementById("message");

    let strength = 0;

    if(password.length >= 8) {
        strength++;
    }

    if(password.match(/[A-Z]/)) {
        strength++;
    }

    if(password.match(/[0-9]/)) {
        strength++;
    }

    if(password.match(/[@#$%^&*!]/)) {
        strength++;
    }

    switch(strength) {

        case 0:
            strengthBar.style.width = "0%";
            message.innerHTML = "";
            break;

        case 1:
            strengthBar.style.width = "25%";
            strengthBar.style.background = "red";
            message.innerHTML = "Weak Password";
            break;

        case 2:
            strengthBar.style.width = "50%";
            strengthBar.style.background = "orange";
            message.innerHTML = "Medium Password";
            break;

        case 3:
            strengthBar.style.width = "75%";
            strengthBar.style.background = "yellow";
            message.innerHTML = "Good Password";
            break;

        case 4:
            strengthBar.style.width = "100%";
            strengthBar.style.background = "lime";
            message.innerHTML = "Strong Password";
            break;
    }
}