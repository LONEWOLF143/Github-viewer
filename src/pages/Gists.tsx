import { GitContext } from '../context/UserContext'
import {FC, useContext} from 'react'

const Gists:FC = () => {
  const {gistsList} = useContext(GitContext)
  return (
    
    <div>{gistsList?.map(gist => (
      <div>
      <h1><a href={gist.html_url} target="_blank" rel='noreferrence'>{gist.html_url}</a></h1>
      <p>{gist.description}</p>
      {/* getting all file names for each gist, used Object.keys so that react does not give us warning about missing keys*/}
      {Object.keys(gist.files).map(filename => (
            <p key={filename}>{gist.files[filename].filename}</p>
          ))}
      </div>
    ))}</div>
  )
}

export default Gists