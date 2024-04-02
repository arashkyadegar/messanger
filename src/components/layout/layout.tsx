import { Outlet, Link } from "react-router-dom";
import FooterComponent from "../footer/footer";

const Layout = () => {
     return (
          <>
               <nav>
                    <FooterComponent />
               </nav>
               <Outlet />
          </>
     )
};

export default Layout;