import React from 'react';
import './CardItem.css';


// class CardItem extends React.Component {

//     constructor(props) {
//         super(props)
//         this.state = {
//             dataBase: ""
//         }
//     }

//     static getDerivedStateFromProps(props, state) {
//         return (
//             { dataBase: props.cardData }
//         )
//     }

//     render() {
//         return (
//             <div className="cards-item" key={this.props.cardData.id} data-id={this.props.cardData.id} onClick={this.cardItemClickEvent}>
//                 <img className="cards-item__img" src={this.props.cardData.url} alt={this.props.cardData.name} />
//                 <p className="cards-item__author" >{this.props.cardData.author}</p>
//                 <p className="cards-item__year">{this.props.cardData.year}</p>
//                 <p className="cards-item__name">{this.props.cardData.name}</p>
//                 <p className="cards-item__price">{this.props.cardData.price}$</p>
//                 <div className="rating-star-wrapper">
//                     {this.addRedStar(this.props.cardData)}
//                 </div>
//             </div>
//         )
//     }

//     addRedStar = (cardData) => {
//         let redStar = [];
//         for (let i = 0; i < 5; i++) {
//             if (i !== Number(cardData.rating) - 1) {
//                 redStar.push(<input className="rating-star" type="radio" name={cardData.id + cardData.name} key={cardData.name + i + 'star'} data-star={i + 1} onClick={this.changeStar} />)
//             } else {
//                 redStar.push(<input className="rating-star" type="radio" name={cardData.id + cardData.name} key={cardData.name + i + 'star'} data-star={i + 1} onClick={this.changeStar} defaultChecked />)
//             }
//         }
//         return redStar
//     }

//     changeStar = (event) => {
//         let temp = this.state.dataBase
//         temp.rating = event.target.getAttribute('data-star')
//         this.setState({ dataBase: temp })
//     }

//     cardItemClickEvent = (event) => {
//         // console.log(event.currentTarget.getAttribute('data-id'))
//     }
// }

// export default CardItem;


const CardItem = (props) => {

    let addRedStar = (cardData) => {
        let redStar = [];
        for (let i = 0; i < 5; i++) {
            if (i !== Number(cardData.rating) - 1) {
                redStar.push(<input className="rating-star" type="radio" name={cardData.id + cardData.name} key={cardData.name + i + 'star'} data-star={i + 1} onClick={changeRedStar} />)
            } else {
                redStar.push(<input className="rating-star" type="radio" name={cardData.id + cardData.name} key={cardData.name + i + 'star'} data-star={i + 1} onClick={changeRedStar} defaultChecked />)
            }
        }
        return redStar
    }

    let changeRedStar = (event) => {
        props.changeStar(event);
    }

    let cardItemClickEvent = (event) => {
        console.log(event.currentTarget.getAttribute('data-id'))
    }

    return (
        <div className="cards-item" key={props.cardData.id} data-id={props.cardData.id} onClick={cardItemClickEvent}>
            <img className="cards-item__img" src={props.cardData.url} alt={props.cardData.name} />
            <p className="cards-item__author" >{props.cardData.author}</p>
            <p className="cards-item__year">{props.cardData.year}</p>
            <p className="cards-item__name">{props.cardData.name}</p>
            <p className="cards-item__price">{props.cardData.price}$</p>
            <div className="rating-star-wrapper">
                {addRedStar(props.cardData)}
            </div>
        </div>
    )

}

export default CardItem;