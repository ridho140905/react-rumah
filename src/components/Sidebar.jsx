import { NavLink } from "react-router-dom";
import { MdDashboard, MdChatBubbleOutline, MdShowChart, MdOutlineLocalOffer, MdStarBorder, MdOutlineInventory2 } from "react-icons/md";

export default function Sidebar() {
  const menuClass = ({ isActive }) =>
    `flex cursor-pointer items-center rounded-xl p-3 space-x-3 font-medium transition-all ${
      isActive
        ? "text-purple-600 bg-purple-100 shadow-sm"
        : "text-gray-500 hover:text-purple-600 hover:bg-purple-50"
    }`;

  return (
    <div id="sidebar" className="flex min-h-screen w-64 flex-col bg-white p-6 border-r border-gray-100">
      {/* Logo */}
      <div className="flex items-center mb-10 pl-2">
        <div className="w-6 h-6 bg-orange-400 rounded-t-full rounded-br-full mr-3"></div>
        <span className="font-bold text-2xl text-gray-800">
          Furni <span className="text-orange-400">House</span>
        </span>
      </div>

      {/* List Menu */}
      <ul className="space-y-2 flex-1">
        <li>
          <NavLink to="/" className={menuClass}>
            <MdDashboard className="text-xl" />
            <span>Overview</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/chat" className={menuClass}>
            <MdChatBubbleOutline className="text-xl" />
            <span>Chat</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/analytic" className={menuClass}>
            <MdShowChart className="text-xl" />
            <span>Analytic</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/sale" className={menuClass}>
            <MdOutlineLocalOffer className="text-xl" />
            <span>Sale</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/review" className={menuClass}>
            <MdStarBorder className="text-xl" />
            <span>Review</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/product" className={menuClass}>
            <MdOutlineInventory2 className="text-xl" />
            <span>Product</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}