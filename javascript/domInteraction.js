// Create a button element
const button = document.createElement('button');
button.textContent = 'Change Text';

// Append the button to the body 
document.body.appendChild(button);

// Create a function to change the text content of the element with id 'myText'
function changeText() {
  const myTextElement = document.getElementById('myText');
  if (myTextElement) {
    myTextElement.textContent = 'Hello, Check!';
  }
}

// Add an event listener to the button to change text when clicked
button.addEventListener('click', changeText);
