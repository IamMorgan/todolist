import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <div>
        <Content />
      </div>
    </div>
  );
}

export default App;
