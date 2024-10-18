import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Experience from './pages/Experience/index';
import Fun from './pages/Fun';
import Final from './pages/final';
import Dalgona from './pages/final/dalgona';
import Applications from './pages/final/applications';
import Spotify from './pages/final/spotify';
import Zoom from './pages/final/zoom';
import Reminders from './pages/final/reminders';

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
        <Route path="/final">
          <Final />
        </Route>
        <Route path="/dalgona">
          <Dalgona />
        </Route>
        <Route path="/applications">
          <Applications />
        </Route>
        <Route path="/dalgona">
          <Dalgona />
        </Route>
        <Route path="/spotify">
          <Spotify />
        </Route>
        <Route path="/zoom">
          <Zoom />
        </Route>
        <Route path="/reminders">
          <Reminders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
