import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from  './Footer/Footer'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  
  render() {
    let nav = this.props.nav
    let main = this.props.main
    return (
      <div className="App">
        <Header nav={nav}/>
        <Main main={main}/>
        <Footer />
      </div>
    )
  }
}

export default App;

