import { useState } from "react";
import MyLink from "../navlink/MyLink";

import { AiOutlineMenuFold, AiOutlineMenu } from "react-icons/ai";

const Nav = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];

      const [open, setOpen] = useState(false)
     
    return (
        <nav>


         <div onClick={() => setOpen(!open)} className=" md:hidden cursor-pointer">

      {
        open === false ? <AiOutlineMenu className="text-2xl"></AiOutlineMenu> :  <AiOutlineMenuFold className="text-2xl"></AiOutlineMenuFold>
      }
        
         </div>
        <ul className={`flex-col flex md:flex-row duration-1000  gap-4 absolute md:static bg-yellow-50 p-12
          ${open ? "top-38" : '-top-100 '}
          `}>
      {
        routes.map(route => <MyLink key={route.id} route={route}></MyLink>)
      }
    
        </ul>

      </nav>
    );
};

export default Nav;