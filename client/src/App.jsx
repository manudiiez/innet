import { useContext } from "react";
/* ---------------------------- REACT-ROUTER-DOM ---------------------------- */
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
/* -------------------------------- COONTEXT -------------------------------- */
import { AuthContext } from "./context/AuthContext";
import ItemSignInContainer from "./pages/credentials/ItemSignInContainer";
import Home from "./pages/home/Home";
import Patiente from "./pages/patient/Patiente";


const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to='/login' />
  }

  return children
}

const ProtectedPriorityRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user || user.rol === 'patient') {
    return <Navigate to='/patient' />
  }

  return children
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<ItemSignInContainer />}/>
          <Route path="/">
            <Route index element={
              <ProtectedPriorityRoute>
                <Home />
              </ProtectedPriorityRoute>
            } />
            <Route path="/patient" element={
              <ProtectedRoute>
                <Patiente/>
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
