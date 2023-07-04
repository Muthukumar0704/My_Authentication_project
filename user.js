//This was not linked in any HTML pages it satisfies only the basic conditions .The login.js is linked in the HTML pages
function createUser() {
  var names = document.getElementById("userNm");
  var pws = document.getElementById("pw");

  if (names.value.length == 0) {
    alert("Please fill in email");
  } else if (pws.value.length == 0) {
    alert("Please fill in password");
  } else {
    localStorage.setItem("names", names.value);
    localStorage.setItem("pws", pws.value);
    alert("Your account has been created");
  }
}

//checking
function check() {
  var storedName = localStorage.getItem("names");
  var storedPw = localStorage.getItem("pws");

  var userName = document.getElementById("name");
  var userPw = document.getElementById("userPw");
  var userRemember = document.getElementById("rememberMe");

  if (userName.value == "admin" && userPw.value == "admin") {
    window.location.href = "dashboard.html";
    alert("admin login successful!");
    var store = localStorage.getItem("names");
    alert(store);
    var contentElement = document.createElement("pre");
    contentElement.textContent = store;

    // Append the <pre> element to a container in your HTML (e.g., <div id="contentContainer">)
    var container = document.getElementById("contentContainer");
    container.appendChild(contentElement);
  } else if (userName.value == storedName && userPw.value == storedPw) {
    var store = localStorage.getItem("name");
    alert(store);
    alert("You are logged in.");
  } else {
    alert("Error on login");
  }
}
