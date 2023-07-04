function createUser() {
  var usernameInput = document.getElementById("userNm");
  var enteredUsername = usernameInput.value.trim();

  // Retrieve the existing users from local storage
  var existingUsers = localStorage.getItem("users");

  // Check if the users data exists
  if (existingUsers) {
    // Attempt to parse the data as JSON
    try {
      existingUsers = JSON.parse(existingUsers);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      // Handle the error, such as setting existingUsers to an empty array
      existingUsers = [];
    }
  } else {
    // No user data found in localStorage, initialize as an empty array
    existingUsers = [];
  }
  // Check if the username already exists
  var existingUser = existingUsers.find(function (user) {
    return user.username === enteredUsername;
  });

  if (existingUser) {
    alert("Username already exists. Please choose a different username.");
    usernameInput.value = ""; // Clear the input field
    usernameInput.focus(); // Set focus back to the username input field
  } else {
    // Create a new user object
    var newUser = {
      username: enteredUsername,
      isAdmin: false,
    };

    // Add the new user to the list
    existingUsers.push(newUser);

    // Update the users in local storage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Account created successfully!");
  }
}

function check() {
  var usernameInput = document.getElementById("name");
  var enteredUsername = usernameInput.value.trim();
  var password = document.getElementById("userPw");

  // Retrieve the existing users from local storage
  var existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  // Check if the username exists
  var loggedInUser = existingUsers.find(function (user) {
    return user.username === enteredUsername;
  });

  if (enteredUsername == "admin" && password.value == "admin") {
    window.location.href = "dashboard.html";

    var localStorageContent = JSON.stringify(existingUsers);
    alert(localStorageContent);

    // // Create a new <pre> element to display the localStorage content
    // var contentElement = document.createElement("pre");
    // contentElement.textContent = localStorageContent;

    // // Append the <pre> element to a container in your HTML (e.g., <div id="contentContainer">)
    // var container = document.getElementById("contentContainer");
    // container.appendChild(contentElement);

    alert("admin login successful!");
  } else if (loggedInUser) {
    window.location.href = "dashboard.html";
    alert("User login successful!");
    //     window.location.href = "/";
  } else {
    alert("Invalid username or password.");
  }
}
