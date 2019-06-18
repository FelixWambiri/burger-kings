import React from 'react';
import Navbar from './common/navbar/Navbar';
import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </div>
  );
}

export default App;
