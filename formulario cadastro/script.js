function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('email').value;
    var birthdate = document.getElementById('birthdate').value;

    if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
        return false;
    }

    return true;
}
