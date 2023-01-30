// initialize clicks at zero
let clicks = 0;

// function body for updating count
function updateCount() {
    clicks = clicks + 1;
    let newText = "Number of times button clicked: ".concat(clicks);
    let buttonDiv = document.getElementById("button-div");
    buttonDiv.innerHTML = newText;
}