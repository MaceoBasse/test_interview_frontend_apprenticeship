import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  return (
    <div className="center">
      <Greeting name="Maceo" />
      <Counter />
    </div>
  );
}

export default App;