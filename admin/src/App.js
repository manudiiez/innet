import Sidebar from './components/Sidebar'
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import Product from "./pages/Area";
import NewArea from "./pages/NewArea";
import AreaList from './pages/AreaList';
import Area from './pages/Area';
import PatientList from './pages/PatientList';
import AlertList from './pages/AlertList';
import Alert from './pages/Alert';
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
            <Route path="/areas" element={<AreaList />} />
            <Route path="/area/:areaId" element={<Area />} />
            <Route path="/newArea" element={<NewArea />} />
            <Route path="/patient" element={<PatientList />} />
            <Route path="/alerts" element={<AlertList />} />
            <Route path="/alert/:alertId" element={<Alert />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;