import React from 'react';
import Menubar from './components/menu';
import { BrowserRouter as Router, Switch,  Route } from 'react-router-dom';
import Homepage from './components/home';
import Aboutpage from './components/about';
import Servicepage from './components/services';



const App = () => {
  return (
    <>
    <Router>
      <Menubar />
      <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/about">
            <Aboutpage />
          </Route>
          <Route exact path="/services">
            <Servicepage />
          </Route>
        </Switch>
    </Router>  
    </>
  )
}



export default App;