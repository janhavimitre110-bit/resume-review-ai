import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-white shadow-md">
      {/* Logo */}
        <div>
        <Link to="/" className="text-3xl font-bold text-blue-600">
          Resume Review AI
        </Link>
        </div>

      {/* Navigation Menu */}
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li>
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
        </li>

        <li>
          <Link to="/" className="hover:text-blue-600">
            Features
          </Link>
        </li>

        <li>
          <Link to="/" className="hover:text-blue-600">
            About
          </Link>
        </li>

        <li>
          <Link to="/" className="hover:text-blue-600">
            Contact
          </Link>
        </li>
      </ul>

      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-5 py-2 border border-blue-600 rounded-lg text-blue-600 hover:bg-blue-50"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;