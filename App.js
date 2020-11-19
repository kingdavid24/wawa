import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>

      <Router>
        <div className="App">
          <h3 className='pipe'></h3>
            <Nav />
              <switch>
                <Route path='/' exact component={Front} />
                <Route path='/homepage'  component={HomePage} />
                <Route path='/about' component={About} />
                <Route path='/shop' component={Shop} />
              </switch>
        </div>
      </Router>
    </div>
  );
}

const Front = () => {
  return(
    <div>
      <h1 className='h1'>Welcome to Bogywap</h1>
      <p className='p3'>Click on Home above to get started</p>
      <hr />
      <h1> India | Hindi | Big-dick | Blowjob | Big-Ass | Free Phone Sex | Meet&Fuck | Porn Game</h1>
    </div>
  );
}


export default App;