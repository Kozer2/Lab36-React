import {Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import AboutMe from './AboutMe';
import ToDo from './ToDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className = "navBar">
          <ul>
            <li><NavLink to = "/" exact>Home</NavLink></li>
            <li><NavLink to = "/AboutMe">About Me</NavLink></li>
            <li><NavLink to = "/ToDo">To Do List</NavLink></li>
          </ul>
        </nav>

      </header>
      
      <main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
          <Route path="/ToDo">
            <ToDo />
          </Route>
        </Switch>
      </main>    

    </div>
  );
}

export default App;
