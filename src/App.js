import React from 'react';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from  './Footer/Footer'

const  App = (props) =>{
  
  return (
    <div className="App">
      <Header  headerMenu={props.headerMenu} />
      <Main pagination={props.pagination} renderCard={props.renderCard}/>
      <Footer renderFooter={props.renderFooter}/>
    </div>
  )
}

export default App;

