import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom"
import { authContext } from "../contexts/authContext"


export default function RouteGuard(){

    const {isAuthenticated} = useContext(authContext)

    return isAuthenticated
        ?<Outlet/>
        :<Navigate to='/login'/>
}