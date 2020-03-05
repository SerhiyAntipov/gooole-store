import React from 'react';
import './Main.css';
import CardItem from '../CardItem/CardItem';

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataBase: '',
            cardsPerPage: 12,
            paginationList: '',
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
            let temp = {};
            temp['id'] = data[i]['gsx$id']['$t'];
            temp['url'] = data[i]['gsx$url']['$t'];
            temp['author'] = data[i]['gsx$author']['$t'];
            temp['year'] = data[i]['gsx$year']['$t'];
            temp['name'] = data[i]['gsx$name']['$t'];
            temp['price'] = data[i]['gsx$price']['$t'];
            temp['rating'] = data[i]['gsx$rating']['$t'];
            out[data[i]['gsx$id']['$t']] = temp;
        }
        this.setState({ dataBase: out });
        this.pagination();
    }

    cardItemClickEvent = (event) => {
        console.log(event)

    }

    pagination = () => {
        this.setState({ paginationList: Math.ceil(this.state.dataBase.length / this.state.cardsPerPage) });
        // let list = 0;
        return (
            this.setState({
                paginationList:
                   <div className='container'>
                        < ul className="pagination" >
                            <li><a href="/">1</a></li>
                            <li><a href="/">2</a></li>
                            <li><a href="/">3</a></li>
                        </ul >
                   </div>
            })
        )
    }

    cardItem = (object) => {
        return (
            <div className="cards-item" key={object.id} data-id={object.id} onClick={this.cardItemClickEvent}>
                <img className="cards-item__img" src={object.url} alt={object.name} />
                <p className="cards-item__author" >{object.author}</p>
                <p className="cards-item__year">{object.year}</p>
                <p className="cards-item__name">{object.name}</p>
                <p className="cards-item__price">{object.price}</p>
                <p className="cards-item__rating">{object.rating}</p>
            </div>
        )
    }

    
    render() {
        if (this.state.dataBase[0]) {
            let out = []
            this.state.dataBase.forEach((object, i) => {
                if (i < this.state.cardsPerPage) {
                    return (
                        out.push(this.cardItem(object))
                    )
                }
            })
            this.cards = out;
        }
        return (
            <div className="main" >
                main
            < CardItem dataBase={this.state.dataBase} />
                <div className="container card-item-container">
                    {this.cards}
                </div>
                {this.state.paginationList}
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
