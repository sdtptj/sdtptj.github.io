function generatePassword() {
    var length = document.getElementById("length").value;
    if (length < 8 || length > 256) {
      alert("Password length must be between 8 and 256 characters.");
      return;
    }
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;
    var characters = "";
    if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
    if (numbers) characters += "0123456789";
    if (symbols) characters += "!@#$%^&*()-_=+";
    var password = "";
    for (var i = 0; i < length; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById("password").value = password;
}

function copyPassword() {
    var passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("已复制密码到剪贴板");
}
