import { Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import AboutMe from './AboutMe';
import ToDo from './ToDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className ="navBar"><ul>
        <li><a href="/">Home</a></li>
          <li><a href="/AboutMe">About Me</a></li>
          <li><a href="/ToDo">To Do List</a></li>
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
