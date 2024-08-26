import React from 'react';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import NameList from './components/NameList';

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