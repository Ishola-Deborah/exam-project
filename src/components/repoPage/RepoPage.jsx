import React from 'react'
import "./repoPage.css"
import { Link } from "react-router-dom"

const RepoPage = ({ repo }) => {

  const colors = {
    JavaScript: "yellow",
    HTML: "#E34C26",
    CSS: "#6F5A90",
    Ruby: "red"
  }

  const ID = repo?.id;
  const IMAGE = repo?.owner.avatar_url;
  const REPO_NAME = repo?.name;
  const DESCRIPTION = repo?.description;
  const PUBLIC = repo?.private;
  const CREATED_AT = repo?.created_at;
  const LANG = repo?.language;
  const NAME = repo?.full_name.split("/")[0];
  const FOLLOW_INDEX = repo?.followIndex;


  return (
    <div className="repoPage">
      <div className="profile_image">
        <img src={IMAGE} alt="" />
      </div>
      <div className="repo_name">
        <Link to={`/Repos/${REPO_NAME}`}>{REPO_NAME}</Link>
      </div>
      <div className="public">
        public
      </div>
      <div className="description"></div>

      {LANG?.length > 0 ? (<div className="language"><div className="langColor" style={{ backgroundColor: colors[LANG] }}></div> {LANG}</div>) : (<div className="language">None</div>)}

      <div className="starred"><span className="material-symbols-outlined">
        star
      </span> 3</div>
      <div className="followIndex">{FOLLOW_INDEX}</div>

    </div>
  )
}

export default RepoPage;