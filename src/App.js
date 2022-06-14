import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Experience from './pages/Experience/index';
import Fun from './pages/Fun';

function App() {

  return (
    <Router >

      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/fun">
            <Fun />
          </Route>
        </Switch>
     
        
    </Router>
  );
}

export default App;
