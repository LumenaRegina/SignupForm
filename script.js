const password = document.getElementById("userPassword");
const confirmPassword = document.getElementById("confirmPassword");

event = document.addEventListener("input", this);

function checkPassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Fehler");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

password.addEventListener("input", checkPassword)
confirmPasswordpassword.addEventListener("input", checkPassword)
