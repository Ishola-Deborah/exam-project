import React from 'react'
import { useState } from 'react'
import RepoPage from '../repoPage/RepoPage'
import "./paginate.css"


const Paginate = ({ repos, REPOSPERPAGE }) => {
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(REPOSPERPAGE)
    const [pageNo, setPageNo] = useState(1)


    const REPOLISTNO = repos.length;
    const PAGES = Math.ceil(REPOLISTNO / REPOSPERPAGE)


    const PageBtns = () => {
        const BUTTONS = new Array(PAGES).fill().map((_, index) => index + 1);
        return BUTTONS;
    }

    const getPrevPage = () => {
        if (startIndex > 1) {
            setStartIndex((prev) => prev - REPOSPERPAGE);
            setEndIndex((prev) => prev - REPOSPERPAGE);
            setPageNo((prev) => prev - 1);
        }
    };

    const getNextPage = () => {
        if (endIndex < REPOLISTNO) {
            setStartIndex((prev) => prev + REPOSPERPAGE);
            setEndIndex((prev) => prev + REPOSPERPAGE);
            setPageNo((prev) => prev + 1);
        }
    };

    const changePageNo = (e) => {
        const value = e.target.textContent;
        setPageNo(value);
        const startPage = Math.abs(value * REPOSPERPAGE - REPOSPERPAGE);
        setStartIndex(startPage);
        const endPage = startPage + REPOSPERPAGE;
        setEndIndex(endPage);
    };

    return (
        <>
            <div className="paginate">
                {repos.slice(startIndex, endIndex).map((repo, index) => {
                    return <RepoPage repo={repo} key={index} />
                })}
            </div>

            <div className="pageButtons">
                <button className="prev" onClick={getPrevPage}>
                    <span className="material-symbols-outlined">
                        arrow_back_ios
                    </span>
                    Prev
                </button>
                {PageBtns().map((page, index) => {
                    return <button key={index} className="btn" onClick={changePageNo}>{page}</button>
                })}
                <button className="next" onClick={getNextPage}>Next<span className="material-symbols-outlined">
                    arrow_forward_ios
                </span></button>
            </div>
        </>



    )
}

export default Paginate