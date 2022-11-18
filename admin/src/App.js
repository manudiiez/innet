import Sidebar from './components/Sidebar'
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NewArea from "./pages/NewArea";
import AreaList from './pages/AreaList';
import Area from './pages/Area';
import AlertList from './pages/AlertList';
import Alert from './pages/Alert';
import PersonList from './pages/PersonList';
import Person from './pages/Person';
import NewPerson from './pages/NewPerson';
import UserList from './pages/UserList';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Login from './pages/Login';
import User from './pages/User';
import NewUser from './pages/NewUser';


const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user || user.rol !== 'administrador') {
    return <Navigate to='/login' />
  }

  return children
}

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/persons" element={
            <ProtectedRoute>
              <PersonList />
            </ProtectedRoute>
          } />
          <Route path="/person/:id" element={
            <ProtectedRoute>
              <Person />
            </ProtectedRoute>
          } />
          <Route path="/newPerson" element={
            <ProtectedRoute>
              <NewPerson />
            </ProtectedRoute>
          } />
          <Route path="/areas" element={
            <ProtectedRoute>
              <AreaList />
            </ProtectedRoute>
          } />
          <Route path="/area/:id" element={
            <ProtectedRoute>
              <Area />
            </ProtectedRoute>
          } />
          <Route path="/newArea" element={
            <ProtectedRoute>
              <NewArea />
            </ProtectedRoute>
          } />
          <Route path="/users" element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          } />
          <Route path="/user/:id" element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          } />
          <Route path="/newUser" element={
            <ProtectedRoute>
              <NewUser />
            </ProtectedRoute>
          } />
          <Route path="/alerts" element={
            <ProtectedRoute>
              <AlertList />
            </ProtectedRoute>
          } />
          <Route path="/alert/:alertId" element={
            <ProtectedRoute>
              <Alert />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;