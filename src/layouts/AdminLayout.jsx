import { Outlet } from "react-router-dom";
import NavbarComponent from '../components/common/NavbarComponent';
import FooterComponent from '../components/common/FooterComponent';

function AdminLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarComponent/>

      <main className="flex-1">
        <Outlet />
      </main>

      <FooterComponent/>
    </div>
  )
}

export default AdminLayout;