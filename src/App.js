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
