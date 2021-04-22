import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ArrowPageLeft, ArrowPageRight} from '../imgFiles';

import './pagination.scss';


const renderPaginationBtns = (setPage, page, lastPage = 20) => {
    const startBtns = [page, page + 1, page + 2, page + 3, page + 4];
    const gapBtns = [page - 2, page - 1, page];
    const middleBtn = [ '...' ];
    const lastBtns = [lastPage - 3, lastPage - 2, lastPage - 1];

    let btnsArr = [];

    if (page < lastPage - 6) {
        btnsArr = [...startBtns, ...middleBtn, ...lastBtns]
    } else if (page < lastPage - 4) {
        btnsArr = [...gapBtns, ...middleBtn, ...lastBtns]
    } else if (page < lastPage - 3) {
        btnsArr = [...gapBtns, ...lastBtns] // last 6 pages
    } else {
        btnsArr = [...middleBtn, ...lastBtns] // last 3 pages
    }

    return btnsArr.map(num => {
        return <button
                key={num}
                onClick={setPage}
                data-name={num}
                className={num === page ? 'active' : ''}
            >{num}</button>
    });
};


const Pagination = ({setPage, page, lastPage, active, delActive, setActive }) => {




    return (
        <div className="paginationWrapper">
            { page !== 0 && <button  data-name="prev"><ArrowPageLeft onClickPage={setPage} onClick={setActive} active={active} /></button> }
            {renderPaginationBtns(setPage, page, lastPage)}
            { page !== lastPage - 1 && <button  data-name="next"> <ArrowPageRight onClickPage={setPage} onClick={delActive} active={!active} /> </button> }
        </div>
    );
}


// Pagination.propTypes = {
//     handleChange: PropTypes.func,
//     options: PropTypes.array,
//     value: PropTypes.number,
// }
//
// Pagination.defaultProps = {
//     onChange: () => {},
//     options: [],
//     value: 0,
// }

export default Pagination;