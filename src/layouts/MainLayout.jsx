import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import Menu from '../components/Menu/Menu'

const MainLayout = () => {
  return (
    <>
      <Menu />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
