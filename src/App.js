import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatedBg } from './components/common/Background';
import ScreenOne from './components/ScreenOne';
import './App.css';
import ScreenTwo from './components/ScreenTwo';
import ScreenThree from './components/SreenThree';
import ScreenFour from './components/ScreenFour';
import ScreenFive from './components/ScreenFive';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <AnimatedBg>
            <Switch>
              <Route path="/2" component={ScreenTwo} />
              <Route path="/3" component={ScreenThree} />
              <Route path="/4" component={ScreenFour} />
              <Route path="/5" component={ScreenFive} />
              <Route path="/" exact component={ScreenOne} />
              <Route render={() => <h2>Not Found</h2>} />
            </Switch>
          </AnimatedBg>
        </div>
      </BrowserRouter>
  );
}

export default App;