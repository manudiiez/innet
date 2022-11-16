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


const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)

  if (!user) {
    return <Navigate to='/users' />
  }

  return children
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/users" element={<ItemSignInContainer />}/>
          <Route path="/">
            <Route index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
