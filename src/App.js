import React from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Page404 from './Page404/Page404';
import Footer from './Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import About from './About/About'
import Contacts from './Contacts/Contacts'


const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Header nav={props.nav} />
        <Switch>
          <Route exact path="/"><Home paginations={props.paginations} googleData={props.googleData} pagination={props.pagination} renderCard={props.renderCard} /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/contacts"><Contacts /></Route>
          <Route > <Page404 /> </Route>
        </Switch>
        <Footer footer={props.footer}/>
      </div>
    </Router>
  )
}

export default App;


