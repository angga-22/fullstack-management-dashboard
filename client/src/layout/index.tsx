import UIFooter from "../components/organisms/Footer"
import UIHeader from "../components/organisms/Header"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div>
      <UIHeader />
      <Outlet />
      <UIFooter />
    </div>
  )
}

export default Layout