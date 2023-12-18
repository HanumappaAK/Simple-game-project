// Initialize game variables
var timer = 60; // Initial time for the game
var score = 0; // Initial score
var ran = 0; // Variable to store the random number to be hit

// Function to create and display bubbles in the game area
function makebubble() {
  var clutter = "";
  // Generate 320 bubbles with random numbers
  for (var i = 1; i <= 320; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  // Set the generated bubbles in the game area
  document.querySelector("#bottom").innerHTML = clutter;
}

// Function to increment the game timer
function inctimer() {
  // Set an interval to decrement the timer every second
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      // Update the displayed timer value
      document.querySelector("#timerval").textContent = timer;
    } else {
      // Stop the timer interval and display Game Over message
      clearInterval(timerint);
      document.querySelector("#bottom").innerHTML = `<h1>Game Over !</h1>`;
    }
  }, 1000);
}

// Function to set a random number to be hit
function hitrand() {
  ran = Math.floor(Math.random() * 10);
  // Update the displayed random number to be hit
  document.querySelector("#hitval").textContent = ran;
}

// Function to increase the player's score
function incscore() {
  score += 10;
  // Update the displayed score
  document.querySelector("#scoreinc").textContent = score;
}

// Function to decrease the player's score
function decscore() {
  score -= 10;
  // Update the displayed score
  document.querySelector("#scoreinc").textContent = score;
}

// Event listener for the click on the game area (bubbles)
document.querySelector("#bottom").addEventListener("click", function (dets) {
  // Get the clicked number
  var num = Number(dets.target.textContent);
  // Check if the clicked number matches the random number to be hit
  if (ran === num) {
    // If matched, increase the score, create new bubbles, and set a new random number to be hit
    incscore();
    makebubble();
    hitrand();
  } else {
    // If not matched and the score is already zero, do nothing
    if (score === 0) {
      return;
    }
    // If not matched, decrease the score, create new bubbles, and set a new random number to be hit
    decscore();
    makebubble();
    hitrand();
  }
});

// Initial setup: create bubbles, set a random number to be hit, and start the timer
makebubble();
hitrand();
inctimer();
