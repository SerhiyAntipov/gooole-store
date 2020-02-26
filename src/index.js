import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let nav = {
    Home: 'index.html',
    About: '#',
    Contacts: '#'
}

let main = {
    title: 'Text Title',
    subtitle: 'Text sub title',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid fugiat possimus fuga, quisquam autem accusam     tempora cupiditate nihil, vero corrupti amet deserunt atque sunt! Non sequi temporibus excepturi saepe odio!'
}


ReactDOM.render(<App nav={nav} main={main} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
