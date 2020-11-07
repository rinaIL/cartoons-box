import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import './App.css';
import Content from "./components/Content";
import ToSetKeywords from "./components/ToSetKeywords";
import VideoApp from "./components/VideoApp";

class App extends React.Component {
 
  render() {
        return (  
          <Router> 
                    <div className="ui secondary pointing menu">
                        <a class="item">
                          <Link to="/">Home</Link>
                        </a>
                        <a className="item">
                          <Link to="/app">Video</Link>
                        </a>
                    </div>
              <Switch>
                  <Route exact path="/"><Content/></Route>
                  <Route path="/admin"><ToSetKeywords/></Route>
                  <Route path="/app"><VideoApp/></Route>
              </Switch>
          </Router>        
       
        );
  }

}

export default App;
