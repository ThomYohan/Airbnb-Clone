import React from 'react';
import './App.css';
import { HashRouter, ROute, Switch } from 'react-router-dom'


import Home from './Components/Home/Home'
import FilteredHomes from './Components/FilteredHomes/FilteredHomes'
// import UnfilteredHomes from 
import Listing from './Components/Listing/Listing'
import NewProperty from './Components/NewProperty/NewProperty'
import NewPropConfirm from './Components/NewPropConfirm/NewPropConfirm'


function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/filteredHomes/:city_id" component={FilteredHomes} />
          <Route path="/unfilteredHomes" component={UnfilteredHomes} />
          <Route path="/listing/:property_id" component={Listing} />
          <Route path="/newProperty" component={NewProperty} />
          <Route path="/propertyConfirm" component={NewPropConfirm} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
