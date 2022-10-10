import { Routes ,Route} from "react-router-dom";
import Login from "../Pages/LoginPage"
import Register from "../Pages/RegisterPage"
import Dashboard from "../Pages/Dashboard";
import {useState} from "react"
function RoutesMain (){

  const [token, setToke] = useState(false);

 return(
   <Routes>
    <Route path='/'  element={<Login token={token}setTOke={setToke} />} />
    <Route path='/dashboard'  element={<Dashboard  />} />
    <Route path='/register'  element={<Register  />} />

   </Routes>
 )
}


export default RoutesMain