import { useSelector } from "react-redux"
import { selectIsLoggedIn } from "../redux/authSlice"
import { Navigate } from "react-router-dom"

const PublicRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

  return isLoggedIn ? <Navigate to='/' replace/> : children
}

export default PublicRoute