import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'


const Layout = () => {
  return (
    <>
    <Sidebar/>
      <div className="container p-5">
    <Outlet/>
      </div>
    </>
  )
}

export default Layout