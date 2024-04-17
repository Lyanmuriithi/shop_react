import { Navigate,Outlet } from "react-router-dom";

export default function Protected() {

    const login_status = localStorage.getItem("accessToken")
    console.log("accessToken", login_status)
    if (!login_status || login_status !== "null") {
       < Navigate to='/login'/>
    }
    return login_status ?<Outlet/>:< Navigate to='/login'/>

}