import { FaBars, FaBell, FaCircle } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
const Navbar = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <nav className="bg-red-500 px-4 py-3 flex justify-between">
      <div className="flex items-center text-xl">
        <FaBars className="text-white me-4 cursor-pointer " onClick={()=>setSidebarToggle(!sidebarToggle)} />
        <span className="text-white font-semibold">E-commerce</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className=" w-full p-1 focus:outline-none text-white md:text-black">
              <FaSearch className="text-white" />{" "}
            </button>
            <input
              type="text"
              className="px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
            />
          </span>
        </div>
      </div>

      <div>
        <div className="text-white flex items-center gap-5">
          <FaBell className="w-6 h-6" />
          <div className="relative">
            <button className="text-white group">
              <FaCircle className="w-6 h-6 mt-1" />
              <div className="z-10 hidden absolute rounded-lg shadow w-32 group-focus:block top-full right-0">
                <ul className="py-2 text-sm text-gray-950">
                  <li>
                    <a href="">Profile</a>
                  </li>
                  <li>
                    <a href="">Settings</a>
                  </li>
                  <li>
                    <a href="">Logout</a>
                  </li>
                </ul>
              </div>
            </button>
          </div>
        </div>
      </div>

    
    </nav>
  );
};

export default Navbar;
