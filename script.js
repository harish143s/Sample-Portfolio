// Display a greeting message on page load
window.onload = function() {
    alert("Welcome to my portfolio!");
    updateYear();
};

// Update the footer with the current year
function updateYear() {
    const yearElement = document.getElementById("current-year");
    yearElement.textContent = new Date().getFullYear();
}

// Change the background color of the page
function changeBackgroundColor() {
    const colors = ["#f0f8ff", "#faebd7", "#ffe4e1", "#e6e6fa", "#fffacd"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
