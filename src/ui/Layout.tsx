
import Nav from '../components/Nav'
import {FC} from 'react'
import {Outlet} from "react-router-dom"

const Layout: FC = () => {
  return (
    <div className='max-auto max-w-4x'>
        <Nav />
        <main className='max-auto max-w-4x'>
        <Outlet/>
        </main>
    </div>
  )
}

export default Layout