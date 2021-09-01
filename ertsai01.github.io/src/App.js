import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Projects from './pages/Projects';
import Music from './pages/Music';
import house from './assets/img/house.png';
import facebook from './assets/img/facebook.svg';
import email from './assets/img/email.svg';
import linkedin from './assets/img/linkedin.svg';
import Strikethrough from './components/Strikethrough/index';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div>
            <Link to='/'><img src={house} class='left icon' alt='home'/></Link>
            <Link to='/about'><Strikethrough text='about' /></Link>
            <Link to='/projects'><Strikethrough text='projects' /></Link>
            <Link to='/music'><Strikethrough text='music' /></Link>
          </div>
          <div>
            <a href='https://www.facebook.com/erintsaii' target='_blank' rel="noreferrer"><img src={facebook} class='right icon' id='fb' alt='facebook'/></a>
            <a href='mailto: ertsai01@berkeley.edu' target='_blank' rel="noreferrer"><img src={email} class='right icon' id='mail' alt='email'/></a>
            <a href='https://www.linkedin.com/in/erin-tsai-9b5a28167/' target='_blank' rel="noreferrer"><img src={linkedin} class='right icon' id='linkedin' alt='linkedin'/></a>
          </div>
        </nav>
    
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/music">
            <Music />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
