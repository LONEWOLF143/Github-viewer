
import { GitContext } from '../context/UserContext'
import {FC, useContext} from 'react'

const Followers:FC = () => {
  const {followers} = useContext(GitContext)
  return (
    <div className='max-w-4xl mx-auto flex'>
      {followers?.map(follower => (
        <div key={follower.id}>
          <img src={follower.avatar_url}/>
          </div>
      ))}
    </div>
  )
}

export default Followers