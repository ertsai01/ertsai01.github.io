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
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/about"}>
          <About />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/experience"}>
          <Experience />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/fun"}>
          <Fun />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/final"}>
          <Final />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/dalgona"}>
          <Dalgona />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/applications"}>
          <Applications />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/dalgona"}>
          <Dalgona />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/spotify"}>
          <Spotify />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/zoom"}>
          <Zoom />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/reminders"}>
          <Reminders />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
