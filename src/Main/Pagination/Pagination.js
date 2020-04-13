import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
  
    return (
        <div className='container pagination-wrapper'>
            < ul className="pagination" >
                {props.pagination()}
            </ul >
        </div>
    )
}

export default Pagination;


// class Pagination extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//         }
//     }

//     static getDerivedStateFromProps(props, state) {
//         return (
//             {
//                 paginations: props.paginations,
//                 cardItems: props.cardItems
//             }
//         )
//     }

//     componentDidMount() {
//         this.pagination();
//     }

//     pagination = () => {

//         let paginationListQuantity = Math.ceil(this.props.googleData.length / this.state.paginations.cardsPerPage);
//         let list = [];
//         for (let i = 0; i < paginationListQuantity; i++) {
//             if (i === this.state.paginations.paginationListActive) {
//                 list.push(<li key={i} className="active"><a href="/" className="paginationLink" data-id={i} onClick={this.changeList}>{i + 1}</a></li>)
//             }
//             else {
//                 list.push(<li key={i} ><a href="/" className="paginationLink" data-id={i} onClick={this.changeList}>{i + 1}</a></li>)
//             }

//             let temp = this.state.paginations
//             temp.paginationList = list;
//             this.setState({ paginations: temp })
//         }
//     }

//     changeList = (event) => {
//         this.props.changePagination(event);
//     }

//     render() {
//         return (
//             <div className='container pagination-wrapper'>
//                 < ul className="pagination" >
//                     {this.state.paginations.paginationList}
//                 </ul >
//             </div>
//         )
//     }
// }

// export default Pagination;

