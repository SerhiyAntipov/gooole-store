import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import state from './redux/state';
import {fetchData} from './redux/state';

let link = state.dataBaseLink

getLink (link);
function getLink (link){ 
    fetchData(link);
}

let StartApp = () =>{
    ReactDOM.render(<App nav={state.nav} main={state.main} googleData={state.googleData} />, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default StartApp
