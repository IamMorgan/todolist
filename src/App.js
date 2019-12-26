import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';



function App(props) {

  return (
    <div className="App">
        <Header />
      <div>
        <Content store={props.store}/>
      </div>
    </div>
	
  );
}

export default App;
