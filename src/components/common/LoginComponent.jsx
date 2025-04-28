
function LoginComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h1>

        <form className="space-y-4">
          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Login
            </button>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-2 mt-4">
            <p className="text-sm text-gray-600">
              New here? <a href="/signup" className="text-blue-600 hover:underline">Create an account</a>
            </p>
            <p className="text-sm text-gray-600">
              <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</a>
            </p>
            <p className="text-sm text-gray-600">
              <a href="/change-password" className="text-blue-600 hover:underline">Change Password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginComponent;