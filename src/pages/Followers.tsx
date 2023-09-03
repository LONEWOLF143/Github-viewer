
import { GitContext } from '../context/UserContext'
import {FC, useContext} from 'react'
import { Link } from 'react-router-dom'

const Followers:FC = () => {
  const {followers} = useContext(GitContext)
  return (
    <div className='max-w-4xl mx-auto flex flex-wrap'>
      {followers?.map(follower => (
        <Link to={follower.html_url}><div key={follower.id} className="flex m-1 mx-auto">
          <img className="w-24 h-24 rounded-full" src={follower.avatar_url}  width="384" height="512"/>
          <div className='ml-3 m-4'>
          <div className="text-sky-500 dark:text-sky-400 flex">
        {follower.login}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
          </div>
          </div>
          </Link>
      ))}
    </div>
  )
}

export default Followers