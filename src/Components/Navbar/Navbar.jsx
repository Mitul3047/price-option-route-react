import Links from "../Links/Links";
import { RiMenu2Fill } from 'react-icons/Ri';

const Navbar = () => {

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
    ];

    return (
        <nav>
            <RiMenu2Fill></RiMenu2Fill>
        <ul className="flex gap-8 p-8 ">
            {
                routes.map(route => (
                    <Links key={route.id} route={route}></Links>
                ))
            }
        </ul>
        </nav>
    );
};

export default Navbar;

