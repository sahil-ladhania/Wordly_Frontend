
function SignupComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Register Yourself
        </h1>

        <form className="space-y-4">
          {/* First Name */}
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
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

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Role Selection */}
          <div>
            <select
              name="role"
              className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Role</option>
              <option value="reader">Reader</option>
              <option value="author">Author</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Sign Up
            </button>
          </div>
          {/* Quick Links */}
          <div className="text-center space-y-2 mt-4">
            <p className="text-sm text-gray-600">
              Already a user? <a href="/login" className="text-blue-600 hover:underline">Login</a>
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

export default SignupComponent;