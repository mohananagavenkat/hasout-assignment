import React from 'react'
import './SingleRepo.css';

function SingleRepo({ repo }) {
  return (
    <div className="each-repo">
      <h2 className="repo-name">{repo.name}</h2>
      <p className="repo-desc">{repo.description}</p>
      <div className="repo-info">
        {repo.language && <span className="repo-language"> <span className='lang-color'></span> {repo.language}</span>}
        {repo.updated_at && <span className="repo-license"> Last Update: {new Date(repo.updated_at).toLocaleDateString()}  </span>}
        {repo.license && <span className="repo-language"> {repo.license.key.toUpperCase()}</span>}
        {/* {repo.language && <span className="repo-language"> {repo.language}</span>} */}
        {/* {repo.license && <span className="repo-license"> {repo.license}</span>} */}
      </div>
    </div>
  )
}

export default SingleRepo
