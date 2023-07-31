function generatePassword() {
    var length = 9,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()",
        retVal = "";
    for (var i = 0; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return retVal;
}

document.getElementById('togglePasswordVisibility').addEventListener('click', function(event) {
  const passwordInput = document.getElementById('regPassword');
  const passwordType = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', passwordType);
  this.textContent = passwordType === 'password' ? 'visibility' : 'visibility_off';
});

document.getElementById('generatePassword').addEventListener('click', function() {
  const password = generatePassword();
  document.getElementById('regPassword').value = password;
  document.getElementById('regConfirmPassword').value = password;
});

