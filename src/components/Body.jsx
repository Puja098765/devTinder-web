import { Outlet } from "react-router-dom"
import NavBar from "./NavBar";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <NavBar/>
       {/* child routes render over */}
       
      <Outlet />
     
      <Footer/>
    </div>
  )
}

export default Body;
