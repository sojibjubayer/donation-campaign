import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-6 px-5 shadow-md">
            <Logo></Logo>
            <ul className="flex gap-20">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] border-b-2 border-[#FF444A] font-bold" : ""
                        }
                    >
                        Home
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] border-b-2 border-[#FF444A] font-bold" : ""
                        }
                    >
                        Donation
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] border-b-2 border-[#FF444A] font-bold" : ""
                        }
                    >
                        Statistics
                    </NavLink>

                </li>
            </ul>
        </div>
    );
};

export default Navbar;