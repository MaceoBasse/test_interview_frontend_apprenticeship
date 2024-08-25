import React from 'react';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';
import NameList from './NameList';

function App() {
  return (
    <div className="center">
      <Greeting name="Maceo" />
      <Counter />
      <NameList />
    </div>
  );
}

export default App;