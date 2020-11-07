import React from 'react';
import logo from './logo.svg';
import './App.css';

const MyFunctionComponent = (props) => {
    return <div>{props.text || 'default'}</div>
};

class MyClassComponent extends React.Component {
  render () {
    return <div>{this.props.text || 'default class text'}</div> 
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <MyClassComponent text = "Click below to enter Facebook"/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook.com
        </a>
      </header>
    </div>
  );
}

export default App;
