import React from 'react';
import '../Pagination/Pagination.css';


class Pagination extends React.Component {
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
            { dataBase: props.dataBase }
        )
    }

    componentDidMount() {
        this.pagination();

    }

    pagination = () => {
       
        let paginationListQuantity = Math.ceil(this.state.dataBase.length / this.state.cardsPerPage)
        let list = [];
        for (let i = 0; i < paginationListQuantity; i++) {
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

    render() {
        return (       
            <div>{this.state.paginationList}</div>
        )
    }
}

export default Pagination;