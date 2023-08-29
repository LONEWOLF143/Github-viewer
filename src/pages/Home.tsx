
import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className='px-5'>
      <form>
        <input type="text" placeholder="search" className='border py-2 rounded-xl px-3' />
        <button type='submit' className='ml-1 border px-4 py-2 hover:bg-black hover:text-white duration-300 font-medium rounded-xl text-base'>submit</button>
      </form>
    </div>
    
  );
};

export default Home;
