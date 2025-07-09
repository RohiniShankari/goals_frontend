import { Pencil } from "lucide-react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6 py-2">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold text-primary">
          Goals
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to="/create"
              className="btn btn-primary btn-sm gap-2"
            >
              <Pencil size={18} />
              Create Note
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
