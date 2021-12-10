import './App.css';
import Nav from './components/NavBar/Nav';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Blogs from './components/NavPages/Blogs';
import Challenges from './components/NavPages/Challenges';
import Flexbox from './components/NavPages/Flexbox';
import Grid from './components/NavPages/Grid';



function App() {

  return (
    <div className="App">
      <div className="container">
     
        <Router>
          <Nav />
          <Switch>
              <Route path="/blogs">
                <Blogs />
              </Route>
              <Route path="/challenges">
                <Challenges />
              </Route>
              <Route path="/flexbox">
                <Flexbox />
              </Route>
              <Route path="/grid">
                <Grid />
              </Route>
              <Route path="/">
                <Home />
              </Route>
          </Switch>
        </Router>
       
      </div>
    </div>
  );
}

export default App;
