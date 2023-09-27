import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    const fontStyle={
        fontFamily:'Inter'
    }
    return (
        <div style={fontStyle} className="flex flex-col md:flex-row  justify-between items-center py-6 px-5 shadow-md">
            <Logo></Logo>
            <ul className=" flex gap-5 md:gap-20 mt-5 md:mt-0">
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