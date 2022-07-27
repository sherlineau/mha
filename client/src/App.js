import { Routes, Route, Link } from "react-router-dom";
import Main from "./views/Main";
import Login from "./views/Login";
import Details from "./views/Details";
import AdminDashboard from "./views/Admin/Dashboard";
import CreatePage from "./views/Admin/CreatePage";
import UpdatePage from "./views/Admin/UpdatePage";
import ErrorPage from "./views/ErrorPage";

function App() {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login/>} />
        <Route path='/people/:id' element={<Details/>} />
        <Route path='/admin/dashboard' element={<AdminDashboard/>} />
        <Route path='/admin/new' element={<CreatePage/>} />
        <Route path='/admin/:id' element={<UpdatePage/>} />
        <Route path='/error' element={<ErrorPage/>} />
      </Routes>
    </div>
  );
}

export default App;
