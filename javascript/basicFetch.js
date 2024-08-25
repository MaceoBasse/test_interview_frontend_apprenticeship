// Function to fetch and display the first 5 todo titles
async function fetchTodos() {
    try {
      // Fetch data from the API endpoint
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      
      // Check if the response is okay
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Convert the response to JSON
      const todos = await response.json();
  
      // Get the first 5 todos
      const firstFiveTodos = todos.slice(0, 5);
  
      // Create an unordered list element
      const ul = document.createElement('ul');
  
      // Append each todo title as a list item
      firstFiveTodos.forEach(todo => {
        const li = document.createElement('li');
        li.textContent = todo.title;
        ul.appendChild(li);
      });
  
      // Append the unordered list to the body or a specific container
      document.body.appendChild(ul);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  }
  
  // Call the function to fetch and display todos
  fetchTodos();
  