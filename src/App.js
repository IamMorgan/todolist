import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Content from './components/content/content';
import store from './redux/reduxStore';
import {Provider} from 'react-redux';



function App(props) {
	
  return (
    <div className="App">
        <Header />
      <div>
      <Provider store={store}>
        <Content />
      </Provider>
      </div>
    </div>
	
  );
}

export default App;
