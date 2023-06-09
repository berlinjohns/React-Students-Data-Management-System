import { useLocation,Navigate,Outlet } from "react-router";
import useAuth from "./useAuth";

 const  RequireAuth=()=>{
    const {auth}=useAuth();
    const location=useLocation()

    return(
        auth?.name
            ?<Outlet/>
            :<Navigate to='/' state={{from:location}} replace/>
    );
}
export default RequireAuth;