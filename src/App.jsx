import Home from "./pages/Home";

import WNav from "./pages/Welcome/WNav";
import Welcome from "./pages/Welcome/Welcome"

import AuthNav from "./pages/AuthPages/AuthNav";
import LoginUI from "./pages/AuthPages/LoginUI";
import SignUpUI from "./pages/AuthPages/SignUpUI";
import AccountVerfication from "./pages/AuthPages/AccountVerfication";
import PasswordVerification from "./pages/AuthPages/PasswordVerification";
import PasswordChange from "./pages/AuthPages/PasswordChange";

import RequireAuth from "./components/RequireAuth";
import RequireOut from "./components/RequireOut";

import { BrowserRouter as Router , Routes , Route, Navigate} from "react-router-dom";
import RoutineTable from "./pages/RoutineTable";
import TechniquePick from "./pages/TechniquePick";
import RequireTechnique from "./components/RequireTechnique";

function App() {

  return (
    <Router>
     <Routes>
      <Route path="/">
      {/* Public Routes : */} 
        <Route element={<RequireOut/>}>
          <Route path="welcome" element={<WNav/>} >
            <Route index element={<Welcome/>}/>
          </Route>
          <Route path="auth" element={<AuthNav/>}>
            <Route index element={<LoginUI/>}/>
            <Route path="signup" element={<SignUpUI/>}/>
            <Route path='passwordChange' element={<PasswordChange/>} />
            <Route path="accountVerification" element={<AccountVerfication/>} />
            <Route path="passwordVerification" element={<PasswordVerification/>} />
          </Route>
        </Route>
      
        {/* Protected Routes */}
        <Route element={<RequireAuth/>}>
          <Route path="routine" element={<RoutineTable />} />
          <Route path="technique" element={<TechniquePick/>} />
          
          
          {/* Require Technique */}
          <Route element={<RequireTechnique/>}>
            {/* HomePage Route */}
            <Route  path="/" element={<Home/>}  />          
          </Route>
          {/* End of Require Techniques */}
          
        </Route>




        <Route path="*" element={<Navigate to={"/"}/>} />            
        </Route>
      </Routes>
    
    </Router>
  )
}

export default App
