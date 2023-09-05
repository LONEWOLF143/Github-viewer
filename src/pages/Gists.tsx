import { GitContext } from '../context/UserContext'
import {FC, useContext} from 'react'
import { extractDate } from './Repos'

const Gists:FC = () => {
  const {gistsList} = useContext(GitContext)
  return (
    
    <div className="mx-auto flex max-w-4xl flex-wrap gap-2">
    {gistsList?.map((gist) => (
      <div key={gist.id} className="mx-auto">
        <a
          href={gist.html_url}
          target="_blank"
          rel="noreferrer"
          className="mx-auto flex rounded h-[100px] w-[400px] flex-col justify-between bg-[#98E1AD] px-3 py-3"
        >
          {Object.keys(gist.files).map((filename) => (
            <div key={filename}>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-[1rem] tracking-[0.2rem] font-[600]"
              >
                {gist.files[filename].filename}
              </a>
              <div className="mt-3 flex justify-between">
                <p className="mr-4 text-[0.55rem] sm:text-[0.75rem] tracking-[0.075rem] font-[400]">
                  Language: {gist.files[filename].language || 'N/A'}
                </p>
                <p className="text-[0.55rem] sm:text-[0.75rem] tracking-[0.075rem] font-[400]">
                  Last updated: {extractDate(gist.updated_at)}
                </p>
              </div>
            </div>
          ))}
        </a>
      </div>
    ))}
  </div>
  )
}

export default Gists

