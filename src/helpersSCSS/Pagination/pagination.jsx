import React from 'react';
import PropTypes from 'prop-types';

import './pagination.scss';


const renderPaginationBtns = (setPage, page = 0, lastPage = 20) => {
    const startBtns = [page, page + 1, page + 2, page + 3, page + 4];
    const gapBtns = [page - 2, page - 1, page];
    const lastBtns = [lastPage - 1];

    let btnsArr = [];

    if (page < lastPage - 6) {
        btnsArr = [...startBtns, ...lastBtns]
    } else if (page < lastPage - 4) {
        btnsArr = [...gapBtns, ...lastBtns]
    } else if (page < lastPage - 3) {
        btnsArr = [...gapBtns, ...lastBtns] // last 6 pages
    } else {
        btnsArr = [ ...lastBtns] // last 3 pages
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


const Pagination = ({setPage, page, lastPage }) => (

    <div className="paginationWrapper">
        { page !== 0 && <button onClick={setPage} data-name="prev">{'<<'}</button> }
        {renderPaginationBtns(setPage, page, lastPage)}
        { page !== lastPage - 1 && <button onClick={setPage} data-name="next">{'>>'}</button> }
    </div>
);

Pagination.propTypes = {
    handleChange: PropTypes.func,
    options: PropTypes.array,
    value: PropTypes.number,
}

Pagination.defaultProps = {
    onChange: () => {},
    options: [],
    value: 0,
}

export default Pagination;