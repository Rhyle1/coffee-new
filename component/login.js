document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

 
  const correctUsername = "dono1";
  const correctPassword = "dono2";

  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === correctUsername && password === correctPassword) {
    alert("Login successful! Redirecting...");
    window.location.href ="web.HTML"; 
  } else {
    alert("Incorrect username or password. Please try again.");
  }
});