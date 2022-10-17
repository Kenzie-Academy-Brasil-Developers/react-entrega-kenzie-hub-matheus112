import { Routes ,Route} from "react-router-dom";
import Login from "../Pages/LoginPage"
import Register from "../Pages/RegisterPage"
import Dashboard from "../Pages/Dashboard";
function RoutesMain (){


 return(
   <Routes>
    <Route path='/'           element={<Login  />} />
    <Route path='/dashboard'  element={<Dashboard  />} />
    <Route path='/register'   element={<Register  />} />

   </Routes>
 )
}


export default RoutesMain