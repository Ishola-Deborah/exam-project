import { useState, useEffect, Suspense } from 'react'
import "./repo.css"
import Paginate from "../../components/paginateRepos/Paginate"
import Loader from "../../components/loader/Loader"

const Repo = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState("");

  const REPOSPERPAGE = 10;
  const URL = "https://api.github.com/users/Ishola-Deborah/repos";

  useEffect(() => {
    fetchRepo();
  }, [])

  const fetchRepo = () => {
    fetch(URL).then(res => res.json()).then(data => {
      const newData = data.map((repo, index) => {
        return { ...repo, followIndex: index + 1 }
      })
      setRepos(newData)
    }).catch((err) => setError(err))
  }


  return (
    <div className="repo">
      <h2>My Repositories</h2>
      {repos.length > 0 ? (<Paginate repos={repos} REPOSPERPAGE={REPOSPERPAGE} />) : (<Loader />)}
    </div>
  )
}

export default Repo