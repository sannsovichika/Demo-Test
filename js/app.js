function generateRandomNumber() {
  // Generate a random number between 1 and 100
  var randomNumber = Math.floor(Math.random() * 100) + 1;

  // Display the random number
  document.getElementById("randomNumber").innerText = "Random Number: " + randomNumber;
}
