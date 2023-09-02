import UserCard from '../components/UserCard';
import React, { FC, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { GitContext, GitUserType } from '../context/UserContext'; // Import only the component

const Home: FC = () => {
  const {
    userExist,
    searchUser,
    setSearchUser,
    searchRequest,
  } = useContext<GitUserType>(GitContext); // Provide the type assertion
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setSearchUser(event.target.value)
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    
    setIsLoading(true);
    await searchRequest(); // Wait for the API request to complete
    setIsLoading(false);
  };

  return (
    <div className='max-w-4xl mx-auto'>
      <div>
        <ul className='flex m-5'>
          <Link to="/"><li className='sm:text-[18px] mr-5 bg-black py-2 px-4 font-semibold rounded-md text-green-500 hover:text-black hover:bg-green-500 duration-100'>home</li></Link>
          <Link to="repo"><li className='sm:text-[18px] mr-5 bg-black py-2 px-4 font-semibold rounded-md text-green-500 hover:text-black hover:bg-green-500 duration-100'>Repositories</li></Link>
          <Link to="followers"><li className=' text-[16px] sm:text-[18px] mr-5 bg-black py-2 px-4 font-semibold rounded-md text-green-500 hover:text-black hover:bg-green-500 duration-100'>Followers</li></Link>
        </ul>
      </div>

      <div className='px-5'>
      <form className='flex' onSubmit={handleSearch}>
  <input type="text"
    onChange={handleSearchInputChange}
    value={searchUser} placeholder="search" className='border py-2 rounded-xl px-3' />
  <button type='submit' className='ml-1 border px-4 py-2 hover:bg-black hover:text-white duration-300 font-medium rounded-xl text-base'>submit</button>
</form>
      </div>
      {isLoading && <p>Loading...</p>} {/* Display loading indicator */}
      {userExist && !isLoading && <UserCard foundUser={userExist} />}
    </div>
  );
};

export default Home;
