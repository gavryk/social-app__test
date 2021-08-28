import React, {useState} from 'react';

const Paginator = ({ totalItemCount, pageSize, currentPage, onChangedPage, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totalItemCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;


    return (
        <div>
            <nav aria-label="page_navigation" className='d-flex justify-content-center p-2'>
                <ul className="pagination">
                    {/*<li className="page-item"><a className="page-link" href="#">Previous</a></li>*/}
                    {
                        portionNumber > 1 &&
                        <li className='page-item' onClick={() => { setPortionNumber(portionNumber - 1) }} >
                            <span className='page-link'> Previous </span>
                        </li>
                    }
                    {pages
                        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                        .map((page) => {
                        return <li
                            key={page}
                            onClick={(e) => { onChangedPage(page) }}
                            className={`page-item ${currentPage === page ? 'currentPage' : ''}`}>
                            <span className={`${currentPage === page ? 'text-white' : ''}  page-link`}>{ page }</span>
                        </li>
                    })}
                    {
                        portionCount > portionNumber &&
                        <li className='page-item' onClick={() => { setPortionNumber(portionNumber + 1) }} >
                            <span className='page-link'> Next </span>
                        </li>
                    }
                    {/*<li className="page-item"><a className="page-link" href="#">Next</a></li>*/}
                </ul>
            </nav>
        </div>
    )
}

export default Paginator;