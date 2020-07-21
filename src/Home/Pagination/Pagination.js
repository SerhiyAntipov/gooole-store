import React from 'react';
import './Pagination.css';

let restart = () =>{};
export let reStartPagination = (observer) => {
    restart = observer;
}

const Pagination = (props) => {
  
    const changePagination = (event) => {
        event.preventDefault();
        let pagination = document.querySelectorAll('.paginationLink');
        pagination[props.paginations.paginationListActive].parentElement.classList.toggle('active');
    
        props.paginations.paginationListActive = Number(event.target.getAttribute('data-id'));
        props.paginations.cardItemStart = Number(props.paginations.cardsPerPage * props.paginations.paginationListActive);
        props.paginations.cardItemEnd = Number(props.paginations.cardsPerPage * (props.paginations.paginationListActive + 1));
    
        pagination[props.paginations.paginationListActive].parentElement.classList.toggle('active');
        restart();
    }

    let pagination = () => {
        let paginationListQuantity = Math.ceil(props.googleData.length / props.paginations.cardsPerPage);
        props.paginations.paginationList = [];
        for (let i = 0; i < paginationListQuantity; i++) {
            if (i === props.paginations.paginationListActive) {
                props.paginations.paginationList.push(<li key={i} className="active"><a href="/" className="paginationLink" data-id={i} onClick={changePagination}  >{i + 1}</a></li>)
            }
            else {
                props.paginations.paginationList.push(<li key={i} ><a href="/" className="paginationLink" data-id={i} onClick={changePagination}>{i + 1}</a></li>)
            }
        }
        return (props.paginations.paginationList)
    }
  
    return (
        <div className='container pagination-wrapper'>
            < ul className="pagination" >
                {pagination()}
            </ul >
        </div>
    )
}

export default Pagination;