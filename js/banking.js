document.getElementById("login-submit").addEventListener("click", function () {
  const loginField = document.getElementById("user-email");
  const loginFieldText = loginField.value;
    //  console.log(loginFieldText);
  const loginField2 = document.getElementById("user-password");
  const loginFieldText2 = loginField2.value;
   console.log(loginFieldText2);
  if (loginFieldText == "gorib" && loginFieldText2 == "gorib") {
    window.location.href = "banking.html";
  } else {
    console.log("invalid input bro");
  }
});
