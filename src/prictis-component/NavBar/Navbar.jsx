import React, { useState } from 'react';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];

      const [open, setOpen] =useState(false);

    return (
        <nav className='flex justify-between items-center bg-amber-100 p-8'>
            <h1 className='text-3xl font-black cursor-pointer'>I && Me</h1>
      <div className="md:hidden cursor-pointer" onClick={() => setOpen(!open)}>
      
      {
        open === false ? <AiOutlineMenu /> : <AiOutlineMenuUnfold />
      }

      </div>
          <ul className={`flex-col md:flex-row flex justify-center items-center gap-6 absolute md:static    ${open ? 'top-48 right-0 rounded-3xl' : '-top-98 right-0' }  bg-amber-100 p-6  duration-1000`}>

          {
                routes.map(link => <Link key={link.id} link={link} ></Link>)
            }
          </ul>
        </nav>
    );
};

export default Navbar;