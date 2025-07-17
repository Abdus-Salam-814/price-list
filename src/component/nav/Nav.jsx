import MyLink from "../navlink/MyLink";
import NavLink from "../navlink/MyLink";


const Nav = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
      ];

    return (
        <nav>

        <ul className="flex-col flex md:flex-row  gap-4">
      {
        routes.map(route => <MyLink key={route.id} route={route}></MyLink>)
      }
    
        </ul>

      </nav>
    );
};

export default Nav;