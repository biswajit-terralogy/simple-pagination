import React from 'react';
import "./App.css";

const Pagination = ({ onNext, onPrevious, currentPage, totalPage, setCurrentPage }) => {
    return (
        <div className="pagination-container">
            <button className="pagiation-page" onClick={onPrevious}>{"<<"}</button>
            {
                Array.from(Array(totalPage).keys()).map((el, i) => <div key={el} className={`pagiation-page ${currentPage === i + 1 && "pagination-color"}`} onClick={() => setCurrentPage(i + 1)}>{i + 1}</div>)
            }
            <button className="pagiation-page" onClick={onNext}>{">>"}</button>
        </div>
    )
}

export default Pagination