import React from 'react';
import './Main.css';
import CardItem from '../CardItem/CardItem';

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataBase: ''
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
            temp['data-id'] = data[i]['gsx$data-id']['$t'];
            temp['url'] = data[i]['gsx$url']['$t'];
            temp['author'] = data[i]['gsx$author']['$t'];
            temp['year'] = data[i]['gsx$year']['$t'];
            temp['name'] = data[i]['gsx$name']['$t'];
            temp['price'] = data[i]['gsx$price']['$t'];
            temp['rating'] = data[i]['gsx$rating']['$t'];
            out[data[i]['gsx$data-id']['$t']] = temp;
        }
        this.setState({ dataBase: out });
        // console.log(this.state.dataBase)
    }


    render() {

        if (this.state.dataBase[0]) {
            let out = []
            this.state.dataBase.forEach((object, i) => {
                console.log(i)
                return (
                    out.push(<div className="cards-item" key={object.name + i} >
                        <img className="cards-item__img" src={object.url} alt={object.name} />
                        <div className="cards-item__author" >{object.author}</div>
                        <div className="cards-item__year">{object.year}</div>
                        <div className="cards-item__name">{object.name}</div>
                        <div className="cards-item__price">{object.price}</div>
                        <div className="cards-item__rating">{object.rating}</div>
                    </div>)
                )
            })
            this.cards = out;
        }
        return (
            <div className="main">
                main
                <CardItem dataBase={this.state.dataBase} />
                {this.cards}
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
