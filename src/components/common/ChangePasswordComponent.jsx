
function ChangePasswordComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Change Password
        </h1>

        <form className="space-y-4">
          {/* Current Password */}
          <div>
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* New Password */}
          <div>
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Confirm New Password */}
          <div>
            <input
              type="password"
              name="confirmNewPassword"
              placeholder="Confirm New Password"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
            >
              Update Password
            </button>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-2 mt-4">
            <p className="text-sm text-gray-600">
              Go back to <a href="/login" className="text-blue-600 hover:underline">Login</a>
            </p>
            <p className="text-sm text-gray-600">
              Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Create one</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePasswordComponent;