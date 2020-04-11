import React from 'react';
import '../CardItem/CardItem.css';


class CardItem extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dataBase: ""
        }
    }

    static getDerivedStateFromProps(props, state) {
        return (
            { dataBase: props.cardData }
        )
    }

    render() {
        return (
            <div className="cards-item" key={this.props.cardData.id} data-id={this.props.cardData.id} onClick={this.cardItemClickEvent}>
                <img className="cards-item__img" src={this.props.cardData.url} alt={this.props.cardData.name} />
                <p className="cards-item__author" >{this.props.cardData.author}</p>
                <p className="cards-item__year">{this.props.cardData.year}</p>
                <p className="cards-item__name">{this.props.cardData.name}</p>
                <p className="cards-item__price">{this.props.cardData.price}$</p>
                <div className="rating-star-wrapper">
                    {this.addRedStar(this.props.cardData)}
                </div>
            </div>
        )
    }

    addRedStar = (object) => {
        let starTemp = [];
        for (let i = 0; i < 5; i++) {
            if (i !== Number(object.rating) - 1) {
                starTemp.push(<input className="rating-star" type="radio" name={object.id + object.name} key={object.name + i + 'star'} data-star={i + 1} onClick={this.changeStar} />)
            } else {
                starTemp.push(<input className="rating-star" type="radio" name={object.id + object.name} key={object.name + i + 'star'} data-star={i + 1} onClick={this.changeStar} defaultChecked />)
            }
        }
        return starTemp
    }

    changeStar = (event) => {
        let temp = this.state.dataBase
        temp.rating = event.target.getAttribute('data-star')
        this.setState({ dataBase: temp })
    }

    cardItemClickEvent = (event) => {
        // console.log(event.currentTarget.getAttribute('data-id'))
    }
}

export default CardItem;