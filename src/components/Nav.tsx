import {FC} from 'react'
import { Link } from 'react-router-dom'

const Nav: FC = () => {
  return (
    <header className='px-5 py-8 w-full'>
      <nav className='max-container flex justify-between'>
        <div className='text-xl'>Github <span className='text-green-500 '>viewer</span></div>
        <div>
          <ul className='flex'>
            <Link to="/"><li className='sm:text-2xl mr-5'>home</li></Link>
            <Link to="repo"><li className='sm:text-2xl mr-5'>Repositories</li></Link>
            <Link to="followers"><li className='sm:text-2xl mr-5'>Followers</li></Link>
          </ul>
        </div>
      </nav>
    </header>
    
    )
  }
  
  export default Nav
  //     <header>
  //       <nav className='max-container'>
  //     <div className="navbar bg-base-100">
  //   <div className="navbar-start">
  //     <a className="btn btn-ghost normal-case text-xl">Github<span className='text-green-500'>Viewer</span></a>
  //   </div>
  //   <div className="navbar-center hidden lg:flex">
  //     <ul className="menu menu-horizontal px-1">
  //     <Link to="/"><li><a>Home</a></li></Link>
  //       <Link to="/repo"><li><a>Repositories</a></li></Link>
  //       <Link to="/gist"><li><a>Gists</a></li></Link>
  //       <Link to="/followers"><li><a>Followers</a></li></Link>
  //     </ul>
  //   </div>
  //   <div className="navbar-end lg:hidden">
  //   <div className="dropdown dropdown-end">
  //   <label className="btn btn-circle swap swap-rotate">
    
  //   {/* this hidden checkbox controls the state */}
  //   <input type="checkbox" />
    
  //   {/* hamburger icon */}
  //   <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
    
  //   {/* close icon */}
  //   <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
    
  // </label>
  //       <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
  //       <Link to="/"><li><a>Home</a></li></Link>
  //       <Link to="/repo"><li><a>Repositories</a></li></Link>
  //       <Link to="/gist"><li><a>Gists</a></li></Link>
  //       <Link to="/followers"><li><a>Followers</a></li></Link>
  //       </ul>
  //     </div>
  //   </div>
  //   </div>
  //   </nav>
  //     </header>