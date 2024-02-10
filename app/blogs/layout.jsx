import NavbarHeader from "../../components/Navbar/Navbar";
import Scrolltop from "../../components/Scrolltop/Scrolltop";

const blogLayout = ({children}) => {
  return (
    <div>
      <NavbarHeader />
      <Scrolltop />
      {children}
    </div>
  )
}

export default blogLayout
