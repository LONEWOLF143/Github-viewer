import { GitContext } from '../context/UserContext';
import { FC, useContext } from 'react';
import { Repo } from 'interfaces/Repo';

function extractDate(dateTimeString: string): string {
  const datePart = dateTimeString.split('T')[0];
  return datePart;
}

const Repos: FC = () => {
  const { repositoriesList } = useContext(GitContext);

  // Create a function to find the latest update date for a repository
  function findLatestUpdateDate(repoDate: Repo) {
    // Create an array of all date strings
    const dateStrings = [repoDate.created_at, repoDate.updated_at];

    // Parse each date string into a Date object
    const dateTimestamps = dateStrings.map((dateString) =>
      Date.parse(dateString),
    );

    // Find the maximum date (latest update date)
    const latestDate = new Date(Math.max(...dateTimestamps));

    // Convert the latest date back to a string
    return extractDate(latestDate.toISOString());
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-wrap gap-2">
      {repositoriesList?.map((repos) => (
        <a href={repos.html_url} target="_blank" rel="noreferrer">
          <div className="mx-auto flex rounded h-[100px] w-[400px] flex-col justify-between bg-[#98E1AD] px-3 py-3">
          <a href={repos.html_url} target="_blank" rel="noreferrer" className='text-[1rem] tracking-[0.2rem] font-[600]'>
            {repos.name}
          </a>
          <div className="mt-3 flex justify-between">
            <p className="mr-4 text-[0.75rem] tracking-[0.075rem] font-[400]">Created: {extractDate(repos.created_at)}</p>
            <p className='text-[0.75rem] tracking-[0.075rem] font-[400]'> Last updated: {findLatestUpdateDate(repos)}</p>
          </div>
        </div>
        </a>
      ))}
    </div>
  );
};

export default Repos;
