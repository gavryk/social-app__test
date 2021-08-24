import React from 'react';

const Paginator = ({ totalUserCount, pageSize, currentPage, onChangedPage }) => {

    let pagesCount = Math.ceil(totalUserCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <nav aria-label="page_navigation" className='d-flex justify-content-center p-2'>
                <ul className="pagination">
                    {/*<li className="page-item"><a className="page-link" href="#">Previous</a></li>*/}
                    {pages.map((page) => {
                        return <li
                            key={page}
                            onClick={(e) => { onChangedPage(page) }}
                            className={`page-item ${currentPage === page ? 'currentPage' : ''}`}>
                            <span className={`${currentPage === page ? 'text-white' : ''}  page-link`}>{ page }</span>
                        </li>
                    })}
                    {/*<li className="page-item"><a className="page-link" href="#">Next</a></li>*/}
                </ul>
            </nav>
        </div>
    )
}

export default Paginator;