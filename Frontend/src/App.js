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

import Tasks from './components/Home page comps/Tasks'
import Challenges from './components/Home page comps/Challenges'
import Month from './components/Home page comps/Month'
import Journaling from './components/Home page comps/Journaling'
import MiniNavbar from "./components/Home page comps/MiniNavbar";
import HomeWrapper from "./pages/HomeWrapper";

function App() {

  const { user } = useAuthContext()


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* {user &&  <Time />} */}
        <div className="pages">
          <Routes>
            <Route 
              path="/home/tasks" 
              element = { user ?
                <HomeWrapper>
                  <Tasks  />
                </HomeWrapper>
                : <Navigate to={"/about"} /> }
              />
              <Route 
                path="/home/month" 
                element = { user ?
                  <HomeWrapper>
                    <Month />
                  </HomeWrapper>
                : <Navigate to={"/about"} />}
              />
              <Route 
                path="/home/challenges" 
                element = { user ?
                  <HomeWrapper>
                    <Challenges />
                  </HomeWrapper>
                  : <Navigate to={"/about"} />}
                />
              <Route 
                path="/home/journaling" 
                element = { user ?
                  <HomeWrapper>
                    <Journaling />
                  </HomeWrapper>
                  : <Navigate to={"/about"} />}
                />
          </Routes>
          <Routes>
              <Route 
                path="/"
                element={user ?
                  <HomeWrapper>
                  <Tasks />
                  </HomeWrapper>
                  : <Navigate to={"/about"} />}
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
                path="/profile"
                element={user ? <Profile /> : <Navigate to={"/login"} />}
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
