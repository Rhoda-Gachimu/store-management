document.querySelector(".switch a").addEventListener("click", function (e) {
    e.preventDefault();
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
    signupForm.style.display = signupForm.style.display === "none" ? "block" : "none";
  });