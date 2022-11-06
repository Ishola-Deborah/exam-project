import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import "./singleRepo.css"
import image from "./IMG-20200708-WA0019.jpg"

const SingleRepo = () => {
    const [repoInfo, setRepoInfo] = useState([])
    const [error, setError] = useState("")
    const params = useParams();
    const repoID = params.RepoID;
    const repoURL = `https://api.github.com/repos/Ishola-Deborah/${repoID}`;

    useEffect(() => {
        fetchRepo()
    }, [])

    const fetchRepo = () => {
        fetch(repoURL).then(res => res.json()).then(data => {
            setRepoInfo(data)

        }).catch(err => setError(err))
    }

    const ID = repoInfo?.id;
    const repoNAME = repoInfo?.name;
    const PRIVATE = repoInfo?.visibility;
    const FORK = repoInfo?.fork;
    const SIZE = repoInfo?.size;
    const LANGUAGE = repoInfo?.language;
    const ISSUES = repoInfo?.has_issues;
    const WATCHERS = repoInfo?.watchers;
    const STARRED = repoInfo?.stargazers_count;


    return (
        <div className="singleRepo">
            <img src={image} alt="" className="avatar" />
            <div className="repoName">
                <span className="title"> repoName:</span>
                <span className="repoNameContent">{repoNAME}</span>
            </div>

            <div className="visibility">
                <span className="title"> visibility:</span>
                <span className="public">{PRIVATE}</span>
            </div>
            <div className="fork">
                <span className="title"> fork:</span>
                {FORK?.length > 0 ? (<span className="forkContent">{FORK}</span>) : (<span className="forkContent">0</span>)}

            </div>
            <div className="size">
                <span className="title"> size:</span>
                <span className="sizeContent">{SIZE}</span>
            </div>
            <div className="lang">
                <span className="title">language :</span>
                <span className="langContent">{LANGUAGE}</span></div>
            <div className="issues">
                <span className="title">issues :</span>
                {ISSUES?.length > 0 ? (<span className="issuesContent">{ISSUES}</span>) : (<span className="issuesContent">0</span>)}

            </div>
            <div className="watchers">
                <span className="title">watchers :</span>
                {WATCHERS?.length > 0 ? (<span className="watchersContent">{WATCHERS}</span>) : (<span className="watchersContent">0</span>)}
            </div>
            <div className="star">
                <span className="title"> starred :</span>
                <span className="starContent">{STARRED}</span>
            </div>
        </div>
    )
}

export default SingleRepo