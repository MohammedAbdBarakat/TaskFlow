import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

//pages amd components
import Navbar from "./components/Navbar";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Calender from "./pages/Calender";
import Time from './components/Time'
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {

  const { user } = useAuthContext()


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {user &&  <Time />}
        <div className="pages">
          <Routes>
            <Route
              path="/profile"
              element={user ? <Profile /> : <Navigate to={"/login"} />}
            />
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to={"/about"} />}
            />
            <Route 
              path="/create" 
              element={user ? <Create /> : <Navigate to={"/login"} />}
            />
            <Route 
              path="/calender" 
              element={user ? <Calender /> : <Navigate to={"/login"} />} 
            />
            <Route
              path="/about"
              element={!user ? <About /> : <Navigate to={"/"} />}
            />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to={"/"} />} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to={'/'} />} 
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
