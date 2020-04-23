import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import TestPage from './components/TestPage';
import { buildPath } from './utils';

console.log("PATH: ", buildPath);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Switch>
            <Route exact path={[buildPath('/'), buildPath('/home')]} component={Home} />
            <Route exact path={buildPath('/test')} component={TestPage} />
          </Switch>
        </Router>
        <img src={buildPath("/75406_v9_bb.jpg")} alt="Wayne" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
