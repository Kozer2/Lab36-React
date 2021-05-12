import {Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import AboutMe from './AboutMe';
import ToDo from './ToDo';
import {useState} from 'react';
import NavLogin from './NavLogin';
import Login from './auth/Login';



function App() {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <header className="App-header">
        <nav className = "navBar">
          <ul>
            <li><NavLink to = "/" exact>Home</NavLink></li>
            <li><NavLink to = "/AboutMe">About Me</NavLink></li>
            <li><NavLink to = "/ToDo">To Do List</NavLink></li>
            <NavLogin user={user}/>
            {/* && is used to say "if thing in front is false, show what comes after"
          {user ??
            <li className="ml-auto"><NavLink to = "/Login">Login</NavLink></li>
          } */}
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
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </main>    

    </div>
  );
}

export default App;
