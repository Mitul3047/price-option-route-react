import { useState } from "react";
import Links from "../Links/Links";
import { RiMenu2Fill , RiCloseLine} from 'react-icons/Ri';

const Navbar = () => {
 const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Blog", path: "/blog" }
    ];

    return (
        <nav>
            <div onClick={() => setOpen(!open)} className="md:hidden p-6 text-black bg-yellow-300 ">
                {
                    open === true ? <RiCloseLine/>: <RiMenu2Fill/>
                }
            {/* <RiMenu2Fill></RiMenu2Fill> */}
            </div>
            
        <ul className={`md:flex md:static absolute bg-yellow-300 text-black p-6 gap-8 duration-1000  ${open ? 'top-16': '-top-60'}`}>
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

