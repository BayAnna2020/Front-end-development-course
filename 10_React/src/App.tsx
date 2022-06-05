import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AboutPet from './Components/AboutPet';
import Header from './Components/Header';
import Main from './Components/Main';


function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route component={Main} path='/' exact></Route>
      <Route component={AboutPet} path='/details'></Route>
    </Switch>
    </BrowserRouter>
  )
}

export default App;
