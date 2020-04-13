import React from 'react';
import './Main.css';
import Pagination from './Pagination/Pagination';

const Main = (props) => {

    return (
        <div className="main" >
            <div className="container card-item-container">
                {props.renderCard(props)}
            </div>
            < Pagination pagination={props.pagination} />
        </div >
    )
}

export default Main;


