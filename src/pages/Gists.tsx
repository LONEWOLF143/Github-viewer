import { GitContext } from '../context/UserContext'
import {FC, useContext} from 'react'

const Gists:FC = () => {
  const {gistsList} = useContext(GitContext)
  return (
    
    <div className="mx-auto flex max-w-4xl flex-wrap gap-2">
      {gistsList?.map(gist => (
      <div>
      <h1><a href={gist.html_url} target="_blank" rel='noreferrence'>{gist.html_url}</a></h1>
      <p>{gist.description}</p>
      {/* getting all file names for each gist, used Object.keys so that react does not give us warning about missing keys*/}
      {Object.keys(gist.files).map(filename => (
            <p key={filename}> { gist.files[filename].filename}</p>
          ))}
      </div>
    ))}</div>
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