document.getElementById('login-submit').addEventListener('click', function () {
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;
    //get password
    const passField = document.getElementById('user-pass');
    const userPassword = passField.value;
    if (userEmail == 'akash@akzmail.com' && userPassword == 'akzz123') {
        window.location.href = 'banking.html';
    }
    else {
        window.alert("Invalid user Email or Password");
    }
})