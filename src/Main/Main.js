import React from 'react';
import './Main.css';
import CardItem from '../CardItem/CardItem';

class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataBase: {}
        }
    }


    // State from child to parent using function 'updateData()'
    updateData = (value) => {
        this.setState({ dataBase: value })
    }

    render() {
        return (
            <div className="main">
                main
                <CardItem updateData={this.updateData} />
            </div>
        )
    }
}

export default Main;
