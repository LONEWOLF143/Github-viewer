
import { GitContext } from '../context/UserContext'
import {FC, useContext} from 'react'

const Repos:FC = () => {
  const {repositoriesList} = useContext(GitContext)
  return (
    <div>
      {repositoriesList?.map(repo => (
        <div>
      <a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a>
      </div>
      ))}
    </div>
  
  )
}

export default Repos