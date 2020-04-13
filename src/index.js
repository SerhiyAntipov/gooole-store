import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { state } from './redux/state';
import CardItem from "./Main/CardItem/CardItem"

let link = state.dataBaseLink

getGoogleData(link)
function getGoogleData(link) {
    fetch(`${link}`)
        .then(googleTableData => {
            return googleTableData.json();
        })
        .then(googleTableData => {
            googleTableData = googleTableData["feed"]["entry"];
            arrayHelper(googleTableData);
        })
}

const arrayHelper = (googleTableData) => {
    let googledata = [];
    let footer = [];
    let nav = [];

    googleTableData.forEach((data, i) => {
        let tempData = [];
        let tempNav = {};
        let tempFooter = {};

        tempData['id'] = data.gsx$id.$t;
        tempData['url'] = data.gsx$url.$t;
        tempData['author'] = data.gsx$author.$t;
        tempData['year'] = data.gsx$year.$t;
        tempData['name'] = data.gsx$name.$t;
        tempData['price'] = data.gsx$price.$t;
        tempData['rating'] = data.gsx$rating.$t;

        if (data.gsx$footercontent.$t) tempFooter.footerContent = data.gsx$footercontent.$t;
        if (data.gsx$footerlinktitle.$t) tempFooter.footerLinkTitle = data.gsx$footerlinktitle.$t;
        if (data.gsx$footertitle.$t) tempFooter.footerTitle = data.gsx$footertitle.$t;
        if (data.gsx$footerlink.$t) tempFooter.footerLink = data.gsx$footerlink.$t;
        if (data.gsx$footercontent.$t) footer.push(tempFooter)

        if (data.gsx$menulink.$t) tempNav.link = data.gsx$menulink.$t
        if (data.gsx$menuname.$t) tempNav.linkName = data.gsx$menuname.$t
        if (data.gsx$menulink.$t) nav.push(tempNav)

        googledata[data['gsx$id']['$t']] = tempData;
    })
    state.googleData = googledata;
    state.footer = footer;
    state.nav = nav;
    StartApp()
}

let headerMenu = () =>{
    let menu = []
    state.nav.forEach((data, i) => {
        menu.push(<li key={i} className="nav-li"><a href={data.link} >{data.linkName}</a></li>)
    });
    return(menu)
};

const changePagination = (event) => {
    event.preventDefault();
    let pagination = document.querySelectorAll('.paginationLink');
    pagination[state.paginations.paginationListActive].parentElement.classList.toggle('active');

    state.paginations.paginationListActive = Number(event.target.getAttribute('data-id'));
    state.paginations.cardItemStart = Number(state.paginations.cardsPerPage * state.paginations.paginationListActive);
    state.paginations.cardItemEnd = Number(state.paginations.cardsPerPage * (state.paginations.paginationListActive + 1));

    pagination[state.paginations.paginationListActive].parentElement.classList.toggle('active');
    StartApp();
}

let changeStar = (event) => {
    let id = event.currentTarget.parentElement.parentElement.getAttribute('data-id')
    state.googleData[id].rating = event.target.getAttribute('data-star')
}


const renderCard = () => {
    let  cardItems = [];
    state.googleData.forEach((object, i) => {
        if (i >= state.paginations.cardItemStart && i < state.paginations.cardItemEnd) {
            cardItems.push(<CardItem changeStar={changeStar} cardData={object} key={i} />)
        }
    });
    return(cardItems)  
}

const renderFooter = () => {
    let footerData = [];
    state.footer.forEach((data, i) => {
        footerData.push(
            <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-6 main-footer__block" key={i}>
                <div className="title">{data.footerTitle}</div>
                <div>{data.footerContent}</div>
                <a href={data.footerLink}>{data.footerLinkTitle}</a>
            </div>
        )
    })
    return (footerData)
}

let pagination = () => {
    let paginationListQuantity = Math.ceil(state.googleData.length / state.paginations.cardsPerPage);
    state.paginations.paginationList = [];
    for (let i = 0; i < paginationListQuantity; i++) {
        if (i === state.paginations.paginationListActive) {
            state.paginations.paginationList.push(<li key={i} className="active"><a href="/" className="paginationLink" data-id={i} onClick={changePagination}  >{i + 1}</a></li>)
        }
        else {
            state.paginations.paginationList.push(<li key={i} ><a href="/" className="paginationLink" data-id={i} onClick={changePagination}>{i + 1}</a></li>)
        }
    }
    return(state.paginations.paginationList)
}


const StartApp = () => {
    ReactDOM.render(
        <App 
        // nav={state.nav} 
        renderFooter={renderFooter}
        renderCard={renderCard}
        pagination={pagination}
        headerMenu={headerMenu}
        />, document.getElementById('root')
    );
};

serviceWorker.unregister();

export default StartApp
