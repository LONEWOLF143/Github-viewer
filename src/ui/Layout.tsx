
import Nav from '../components/Nav'
import {FC} from 'react'
import {Outlet} from "react-router-dom"

const Layout: FC = () => {
  return (
    <div>
        <Nav />
        <main className='mx-auto max-w-3x'>
        <Outlet/>
        </main>
    </div>
  )
}

export default Layout