import { GitContext } from '../context/UserContext'
import {FC, useContext} from 'react'
import { extractDate } from './Repos'

const Gists:FC = () => {
  const {gistsList} = useContext(GitContext)
  return (
    
    <div className="mx-auto flex max-w-4xl flex-wrap gap-2">
      {gistsList?.map(gist => (
      <div className='bg-gray-500'>
      {/* getting all file names for each gist, used Object.keys so that react does not give us warning about missing keys*/}
      {Object.keys(gist.files).map(filename => (
        <div>
            <p key={filename}> <a href={gist.html_url}>{ gist.files[filename].filename}</a></p>
            <p>{gist.files[filename].language}</p>
            </div>
          ))}
          <div>
          <p>{extractDate(gist.created_at )}</p>
          </div>
      </div>
    ))}
    </div>
  )
}

export default Gists


{/* <div className="mx-auto flex max-w-4xl flex-wrap gap-2">
{repositoriesList?.map((repos) => (
  <a href={repos.html_url} target="_blank" rel="noreferrer " className='mx-auto'>
    <div className="mx-auto flex rounded h-[100px] w-[400px] flex-col justify-between bg-[#98E1AD] px-3 py-3">
    <a href={repos.html_url} target="_blank" rel="noreferrer" className='text-[1rem] tracking-[0.2rem] font-[600]'>
      {repos.name}
    </a>
    <div className="mt-3 flex justify-between  ">
      <p className="mr-4 text-[0.55rem] sm:text-[0.75rem] tracking-[0.075rem] font-[400]">Created: {extractDate(repos.created_at)}</p>
      <p className='text-[0.55rem] sm:text-[0.75rem] tracking-[0.075rem] font-[400]'> Last updated: {findLatestUpdateDate(repos)}</p>
    </div>
  </div>
  </a>
))}
</div> */}