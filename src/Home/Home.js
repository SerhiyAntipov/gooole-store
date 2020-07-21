import React from 'react';
import './Home.css';
import Pagination from './Pagination/Pagination';
import CardItem from "./CardItem/CardItem";


const Main = (props) => {
    let cardItems;
    let changeStar = (event) => {
        let id = event.currentTarget.parentElement.parentElement.getAttribute('data-id')
        props.googleData[id].rating = event.target.getAttribute('data-star')
    }

    let renderCard = () => {
        cardItems = []
        props.googleData.forEach((object, i) => {
            if (i >= props.paginations.cardItemStart && i < props.paginations.cardItemEnd) {
                cardItems.push(<CardItem changeStar={changeStar} cardData={object} key={i} />)
            }
        });
        return (cardItems)
    }

    return (
        <div className="main" >
            <div className="container card-item-container">
                {renderCard()}
            </div>
            < Pagination googleData={props.googleData} paginations={props.paginations} />
        </div >
    )
}



export default Main;


