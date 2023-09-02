import { GitContext } from '../context/UserContext'
import {FC, useContext} from 'react'

const Followers:FC = () => {
  const {followers} = useContext(GitContext)
  return (
    <div>{followers?.map(follower => (
      <div>{follower.login}</div>
     ))}</div>
  )
}

export default Followers