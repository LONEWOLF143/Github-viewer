import {FC} from 'react'
import { Link } from 'react-router-dom'

const Nav: FC = () => {
  return (
    <header className='px-5 py-8 w-full max-w-4xl mx-auto'>
      <nav className='max-container flex justify-between'>
        <Link to="/"><div className='text-xl flex-grow-1'>Github <span className='text-green-500 '>viewer</span></div></Link>
      </nav>
    </header>
    
    )
  }
  
  export default Nav
  