import { GitContext } from '../context/UserContext'
import {FC, useContext} from 'react'

const Gists:FC = () => {
  const {gistsList} = useContext(GitContext)
  return (
    <div>{gistsList?.map(gist => (
      <h1>{gist.html_url}</h1>
    ))}</div>
  )
}

export default Gists