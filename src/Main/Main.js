import React from 'react';
import './Main.css';
import CardItem from '../CardItem/CardItem';
import Pagination from '../Pagination/Pagination';

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataBase: '',
            cardsPerPage: 12,
            paginationList: '',
            paginationListActive: '',
            paginationListQuantity: '',
            maxPaginationListQuantity: '9',
        }
        this.cards = '';

        this.getFetchGoogleTableData();
    }

    getFetchGoogleTableData = () => {
        fetch('https://spreadsheets.google.com/feeds/list/1rmjMVuj1tmp1K35vbPWC7UXadsP4C8vgxRvRECJw2Yk/od6/public/values?alt=json')
            .then(data => {
                return data.json();
            })
            .then(data => {
                data = data["feed"]["entry"];
                this.arrayHelper(data);
            })
    }

    arrayHelper(data) {
        let out = []
        let baseFilledUpTo = 36;
        // for (let i = 0; i < data.length; i++) {
        for (let i = 0; i < baseFilledUpTo; i++) {
            let starTemp = {};
            starTemp['id'] = data[i]['gsx$id']['$t'];
            starTemp['url'] = data[i]['gsx$url']['$t'];
            starTemp['author'] = data[i]['gsx$author']['$t'];
            starTemp['year'] = data[i]['gsx$year']['$t'];
            starTemp['name'] = data[i]['gsx$name']['$t'];
            starTemp['price'] = data[i]['gsx$price']['$t'];
            starTemp['rating'] = data[i]['gsx$rating']['$t'];
            out[data[i]['gsx$id']['$t']] = starTemp;
        }
        this.setState({ dataBase: out });
        this.pagination();
    }

    cardItemClickEvent = (event) => {
        if (event.target.parentElement.classList.value === 'cards-item') {
            let cardItemClick = this.state.dataBase[event.target.parentElement.getAttribute('data-id')];
            console.log(cardItemClick)
        } else if (event.target.classList.value !== 'rating-star-wrapper' &&
            event.target.parentElement.classList.value !== 'rating-star-wrapper' &&
            event.target.parentElement.parentElement.classList.value !== 'rating-star-wrapper') {
            let cardItemClick = this.state.dataBase[event.target.getAttribute('data-id')];
            console.log(cardItemClick)
        }
    }

    pagination = () => {
        this.setState({ paginationListQuantity: Math.ceil(this.state.dataBase.length / this.state.cardsPerPage) });
        let list = [];
        for (let i = 0; i < this.state.paginationListQuantity; i++) {
            if (i < this.state.maxPaginationListQuantity && i === 0) {
                list.push(<li key={i} className="active" onClick={this.changePagination}><a href="/">{i + 1}</a></li>)
                this.setState({ paginationListActive: i })
            }
            else if (i < this.state.maxPaginationListQuantity) {
                list.push(<li key={i} onClick={this.changePagination}><a href="/" >{i + 1}</a></li>)
            }
        }

        return (
            this.setState({
                paginationList:
                    <div className='container pagination-wrapper'>
                        < ul className="pagination" >
                            {list}
                        </ul >
                    </div>
            })
        )
    }

    changePagination = (event) => {
        event.preventDefault();
        let pagination = document.querySelectorAll('.pagination');
        pagination[0].children[this.state.paginationListActive].classList.toggle('active');
        this.setState({ paginationListActive: (event.target.innerText - 1) })
        pagination[0].children[event.target.innerText - 1].classList.toggle('active');
    }

    createCardItemList = (cardItemStart, cardItemEnd) => {
        if (this.state.dataBase[0]) {
            let out = []
            this.state.dataBase.forEach((object, i) => {
                if (i >= cardItemStart && i < cardItemEnd) {
                    return (
                        out.push(this.cardItem(object))
                    )
                }
            })
            this.cards = out;
        }
    }

    changeStar = (event) => {
        let tempData = this.state.dataBase[event.target.parentElement.parentElement.getAttribute('data-id')];
        tempData.rating = event.target.getAttribute('data-star');
    }

    cardItem = (object) => {
        let starTemp = [];
        for (let i = 0; i < 5; i++) {
            if (i !== Number(object.rating) - 1) {
                starTemp.push(<input className="rating-star" type="radio" name={object.id + object.name} key={object.name + i + 'star'} data-star={i + 1} onClick={this.changeStar} />)
            } else {
                starTemp.push(<input className="rating-star" type="radio" name={object.id + object.name} key={object.name + i + 'star'} data-star={i + 1} onClick={this.changeStar} defaultChecked />)
            }
        }
        return (
            <div className="cards-item" key={object.id} data-id={object.id} onClick={this.cardItemClickEvent}>
                <img className="cards-item__img" src={object.url} alt={object.name} />
                <p className="cards-item__author" >{object.author}</p>
                <p className="cards-item__year">{object.year}</p>
                <p className="cards-item__name">{object.name}</p>
                <p className="cards-item__price">{object.price}$</p>
                <div className="rating-star-wrapper">
                    {starTemp}
                </div>
            </div>
        )
    }

    render() {
        let cardItemStart = this.state.cardsPerPage * this.state.paginationListActive;
        let cardItemEnd = this.state.cardsPerPage * (this.state.paginationListActive + 1);
        this.createCardItemList(cardItemStart, cardItemEnd);
        return (
            <div className="main" >
                main
                < CardItem dataBase={this.state.dataBase} />
                
                <div className="container card-item-container">
                    {this.cards}
                </div>
                {this.state.paginationList}
                < Pagination dataBase={this.state.dataBase} />
            </div>
        )
    }
}

export default Main;

    // // State from child to parent using function 'updateData()'  PARENT Module!
    // updateData = (value) => {
    //     this.setState({ dataBase: value })
    // }
    // State from child to parent using function 'updateData()'  PARENT Module!
    // <CardItem updateData={this.updateData} />

    // // State from child to parent using function 'updateData()' CHILDREN Module!
    // this.props.updateData(this.state.dataBase);
