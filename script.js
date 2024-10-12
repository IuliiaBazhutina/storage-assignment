//Step 1: Welcome message

// Create an object with current date and time
var today = new Date();

var welcomeMessage = "";

// Check the part of a day
if (today.getHours() < 11) {greetingMessage = "Good Morning, "}
else if (today.getHours() > 16) {welcomeMessage = "Good Evening, "}
else welcomeMessage = "Good Afternoon, "

// Step 2: set up the event listener

const saveNameButton = document.getElementById("save-btn");
const clearNameButton = document.getElementById("clear-btn");

// Step 3: Add a click event listener to the button

saveNameButton.addEventListener("click", saveName);
clearNameButton.addEventListener("click", clearName);

// Step 4: Check if there is a name in the localStorage

if (localStorage.getItem("user") != null) {displayName();}


// Function to save the user's name in the local storage

function saveName() {

    const DisplayElement = document.getElementById("display-name");

    // Get value from the field username
    const NameElement = document.getElementById("username").value;

    // Create a new sign in the local storage with user's name
    localStorage.setItem("user", NameElement);

}

// Function to clear the local storage

function clearName() {

    // Remove the sign from the local storage
    localStorage.removeItem("user");
   
    // Clear the field display-name
    const DisplayElement = document.getElementById("display-name");
    DisplayElement.innerHTML = "";

    // Add the initial welcome message
    const WelcomeElement = document.getElementById("welcomeMessage");
    WelcomeElement.innerHTML = "Welcome, User!";

}

// Function to display the user's name from the local storage

function displayName() {

    const DisplayElement = document.getElementById("display-name");

    // Display user's name from local storage
    DisplayElement.innerHTML = `${localStorage.getItem("user")}`
    
    // Add a new welcome message
    const WelcomeElement = document.getElementById("welcomeMessage");
    WelcomeElement.innerHTML = `${welcomeMessage}${localStorage.getItem("user")}!`;;
}