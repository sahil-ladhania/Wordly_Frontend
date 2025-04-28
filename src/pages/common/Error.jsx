import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Big Error Text */}
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>

      {/* Small Message */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-600 mb-6 text-center">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default Error;