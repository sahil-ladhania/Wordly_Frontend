import { Outlet } from "react-router-dom";

function AuthorLayout() {
  return (
    <div>
      {/* Navbar */}
      <h1>Navbar</h1>

      {/* Body */}
      <main>
        <Outlet/>
      </main>

      {/* Footer */}
      <h1>Footer</h1>
    </div>
  )
}

export default AuthorLayout;