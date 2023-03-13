import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Reminder from "./pages/reminder/Reminder";
import Settings from "./pages/setting/Settings";
import Single from "./pages/single/Single";

import { 
  BrowserRouter as Router,
   Routes,
   Route 
  } from "react-router-dom";
import Policy from "./pages/policy/Policy";

function App() {
const user = true;
  return (
    <Router>
   <Topbar/>
   <Routes>
   <Route exact path="/"element={<Home />}></Route>
   <Route path="/register"element={user ? <Home/> :<Register />}></Route>
   <Route path="/login"element={user ? <Home/> :<Login />}></Route>
   <Route path="/reminder"element={<Reminder />}></Route>
   <Route path="/post/postId"element={<Single />}></Route>
   <Route path="/settings"element={user?<Settings />: <Register/>}></Route>
   <Route path="/policy"element={user ? <Policy />: <Register/>}></Route>
   </Routes>
   </Router>
  );
}

export default App;
