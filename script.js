const heartButton = document.getElementById('heartButton');
const messageContainer = document.getElementById('messageContainer');
const message = document.getElementById('message');
const yesButton = document.getElementById('yesButton');
const proudMessage = document.getElementById('proudMessage');
const energyButton = document.getElementById('energyButton');
const energyMessage = document.getElementById('energyMessage');
const envelope = document.querySelector('.envelope'); // Select the envelope element

// Display the question after clicking the heart button
heartButton.addEventListener('click', () => {
  heartButton.style.display = 'none'; // Hide the heart button
  envelope.style.display = 'none'; // Hide the envelope after the heart button is clicked
  
  messageContainer.style.display = 'block'; // Show the message container
  setTimeout(() => {
    message.style.display = 'block'; // Show the message after a delay
  }, 500);
});

// Display "I'm so proud of you!" after clicking the 'Yes' button
yesButton.addEventListener('click', () => {
  message.style.display = 'none'; // Hide the question
  proudMessage.style.display = 'block'; // Show the "I'm so proud of you!" message
});

// Display the "UMMMAAA!" message after clicking the 'Click here for some energy' button
energyButton.addEventListener('click', () => {
  proudMessage.style.display = 'none'; // Hide the previous message
  energyMessage.style.display = 'block'; // Show the "UMMMAAA!" message
});
