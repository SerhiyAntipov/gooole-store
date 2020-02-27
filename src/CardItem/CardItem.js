import React from 'react';
import '../CardItem/CardItem.css';


class CardItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataBase: {}
        }
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
        this.buildingProductCards();

        // State from child to parent using function 'updateData()'
        this.props.updateData(this.state.dataBase);
    }

    // State from parent to child  using function 'getDerivedStateFromProps(props, state)'
    // static getDerivedStateFromProps(props, state) {
    //     return ({
    //         dataBase: props.dataBase
    //     })
    // }

    buildingProductCards = () => {
        this.state.dataBase.map( (object, i) =>{
            return console.log(object)
         });
    }


    render() {
        
        return (
        <div className="cardItem" >
            CardItem 
        </div>
        )
    }
}

export default CardItem;