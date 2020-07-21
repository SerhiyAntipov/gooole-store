import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { state } from './redux/state';


// observer ==========================
import { reStartApp } from './redux/state';
import { reStartPagination } from './Home/Pagination/Pagination';

const StartApp = () => {
    ReactDOM.render(
        <App
            nav={state.nav}
            footer={state.footer}
            paginations={state.paginations}
            googleData={state.googleData}
            pagination={state.pagination}
        />, document.getElementById('root')
    );
};


// observer ==========================
reStartApp(StartApp);
reStartPagination(StartApp);

serviceWorker.unregister();
export default StartApp
