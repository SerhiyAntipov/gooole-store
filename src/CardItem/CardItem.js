import React from 'react';
import '../CardItem/CardItem.css';


class CardItem extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataBase: {}
        }
    }


    // State from parent to child  using  function 'getDerivedStateFromProps(props, state)'
    static getDerivedStateFromProps(props, state) {
        return ({
            dataBase: props.dataBase
        })
    }

    render() {
        return (
            <div>Card Item</div>
        ) 
    }
}

export default CardItem;