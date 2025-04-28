import './App.css'
import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';
import AuthorLayout from './layouts/AuthorLayout';
import ReaderLayout from './layouts/ReaderLayout';
import AdminHome from './pages/admin/AdminHome';
import AuthorHome from './pages/author/AuthorHome';
import ReaderHome from './pages/reader/ReaderHome';
import Error from './pages/common/Error';

function App() {
  return (
    <>
      <Routes>
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
