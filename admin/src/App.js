import Sidebar from './components/Sidebar'
import Topbar from "./components/Topbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewArea from "./pages/NewArea";
import AreaList from './pages/AreaList';
import Area from './pages/Area';
import AlertList from './pages/AlertList';
import Alert from './pages/Alert';
import PersonList from './pages/PersonList';
import Person from './pages/Person';
import NewPerson from './pages/NewPerson';
import UserList from './pages/UserList';
function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/persons" element={<PersonList />} />
            <Route path="/user/:userId" element={<Person />} />
            <Route path="/newUser" element={<NewPerson />} />
            <Route path="/areas" element={<AreaList />} />
            <Route path="/area/:areaId" element={<Area />} />
            <Route path="/newArea" element={<NewArea />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/alerts" element={<AlertList />} />
            <Route path="/alert/:alertId" element={<Alert />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;