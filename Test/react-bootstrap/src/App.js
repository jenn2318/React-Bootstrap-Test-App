import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import LastCallEats from './components/LastCallEats';
import './App.css';
import Navbar from './components/CustomNavbar';
// import Background from './assets/late_night_dt.jpeg';
class App extends Component {
  render() {
    return (

        <Router>
        <div>
        <Navbar />
        <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/LastCallEats" component={LastCallEats} />
        </div>
       </Router>

    );
  }
}

export default App;
