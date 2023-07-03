const button = document.getElementById("myButton");

// Function to change the button text
function changeButtonText() {
    if (button.textContent === "Click Me!") {
        button.textContent = "Clicked!";
    } else {
        button.textContent = "Click Me!";
    }
}

// Add event listener to the button
button.addEventListener("click", changeButtonText);