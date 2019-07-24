import React, { Component } from 'react';

import { BrowserRouter as Router,  Route,  } from 'react-router-dom';

import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import Header from "./Header"
class App extends Component {

  render() {
    return (
      <div>
         <Router>
          <div>
          <Header />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;