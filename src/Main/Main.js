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
            maxPaginationListQuantity: '9',
        }
        this.cards = '';
    }

    static getDerivedStateFromProps(props, state) {
        return (
            { dataBase: props.googleData }
        )
    }


    createCardItemList = (cardItemStart, cardItemEnd) => {
        let out = [];

        this.state.dataBase.forEach((object, i) => {
            if (i >= cardItemStart && i < cardItemEnd) {
                out.push(<CardItem cardData={object} key={i} />)
            }
        })
        this.cards = out;
        return out
    }

    render() {
        let cardItemStart = this.state.cardsPerPage * this.state.paginationListActive;
        let cardItemEnd = this.state.cardsPerPage * (this.state.paginationListActive + 1);
        this.createCardItemList(cardItemStart, cardItemEnd);
        return (
            <div className="main" >
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
