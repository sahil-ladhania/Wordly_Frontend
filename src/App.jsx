import './App.css'
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AuthorLayout from './layouts/AuthorLayout';
import ReaderLayout from './layouts/ReaderLayout';
import AdminHome from './pages/admin/AdminHome';
import AuthorHome from './pages/author/AuthorHome';
import ReaderHome from './pages/reader/ReaderHome';
import Error from './pages/common/Error';
import Signup from './pages/common/Signup';
import Login from './pages/common/Login';
import ForgotPassword from './pages/common/ForgotPassword';
import ChangePassword from './pages/common/ChangePassword';

function App() {
  return (
    <>
      <Routes>
        {/* Common Pages */}
        <Route path="signup" element={<Signup/>} />
        <Route path="login" element={<Login/>} />
        <Route path="forgot-password" element={<ForgotPassword/>} />
        <Route path="change-password" element={<ChangePassword/>} />

        {/* Default : Reader Dashboard */}
        <Route path="/" element={<ReaderLayout />}>
          <Route index element={<ReaderHome />} />
        </Route>

        {/* Admin Dashboard */}
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<AdminHome/>} />
        </Route>

        {/* Author Dashboard */}
        <Route path="/author" element={<AuthorLayout/>}>
          <Route index element={<AuthorHome/>} />
        </Route>

        {/* Error Page */}
        <Route path="*" element={<Error/>} />
      </Routes>
    </>
  )
}

export default App
