import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Wordly
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6">
          {/* Show the below items only if the user is authenticated :- */}
          {/* <Link to="/blogs" className="text-gray-600 hover:text-gray-900">Blogs</Link> */}
          {/* <Link to="/profile" className="text-gray-600 hover:text-gray-900">Profile</Link> */}

          {/* Show the below item only if the user is not authenticated :- */}
          <Link to="/signup" className="text-gray-200 px-4 py-2 rounded-full bg-black">Sign up</Link>
        </nav>
      </div>
    </header>
  )
}

export default NavbarComponent;