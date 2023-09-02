import { GitContext } from 'context/UserContext'
import  { FC, useContext } from 'react'

const FollowersCard: FC = () => {
    const {followers} = useContext(GitContext)
  return (
    <div className='max-w-4xl mx-auto flex'>{followers?.map(follower => (
        <div key={follower.id}>
        <img src={follower.avatar_url} alt={`Avatar of ${follower.login}`} />
      </div>
       ))}</div>
  )
}

export default FollowersCard