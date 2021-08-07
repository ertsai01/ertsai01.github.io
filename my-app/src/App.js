import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Programming from './pages/projects/Programming';
import Design from './pages/projects/Design';
import Music from './pages/projects/Music';
import house from './assets/img/house.png';
import facebook from './assets/img/facebook.svg';
import email from './assets/img/email.svg';
import linkedin from './assets/img/linkedin.svg';

function App() {
  return (
    <Router>
      <div>
      <nav>
    		<div id='leftnav'>
    			<Link to='/'><img src={house} class='left icon' alt='home'/></Link>
	    		<Link to='/about'><span class='left strike'>about</span></Link>
	    		<div id='menu-container'>
	    			<a id='dropbutton'><span class='left'>projects</span></a>
	    			<div id='dropmenu'>
	    				<Link to='/projects/design' class='menuitem'><span class='strike'>design</span></Link>
	    				<Link to='/projects/music' class='menuitem'><span class='strike'>music</span></Link>
	    				<Link to='/projects/programming' class='menuitem'><span class='strike'>programming</span></Link>
            </div>
	    		</div>
	    		<Link to='/resume'><span class='left strike'>resume</span></Link>
    		</div>
    		<div id='rightnav'>
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
          <Route path="/projects/design">
            <Design />
          </Route>
          <Route path="/projects/music">
            <Music />
          </Route>
          <Route path="/projects/programming">
            <Programming />
          </Route>
          <Route path="/resume">
            <Programming />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
