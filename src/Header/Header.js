import React from 'react';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataBase: {}
        }
        this.getFetchGoogleTableData();
    }

    getFetchGoogleTableData = () => {
        fetch('https://spreadsheets.google.com/feeds/list/199tj50ekUNdkP_lk-KaHzI63LpyoETlDp2mO3kHDXXo/od6/public/values?alt=json')
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
        for (let i = 0; i < data.length; i++) {
            let temp = {};
            temp['data-id'] = data[i]['gsx$data-id']['$t'];
            temp['url'] = data[i]['gsx$url']['$t'];
            temp['url-2'] = data[i]['gsx$url-2']['$t'];
            temp['author'] = data[i]['gsx$author']['$t'];
            temp['year'] = data[i]['gsx$year']['$t'];
            temp['name'] = data[i]['gsx$name']['$t'];
            temp['description'] = data[i]['gsx$description']['$t'];
            temp['section'] = data[i]['gsx$section']['$t'];
            temp['price'] = data[i]['gsx$price']['$t'];
            out[data[i]['gsx$data-id']['$t']] = temp;
        }
        this.setState({ dataBase: out });
        console.log(this.state.dataBase)
    }

    render() {
        return (
            <div className="main-header">
                header
      </div>
        )
    }
}

export default Header;

