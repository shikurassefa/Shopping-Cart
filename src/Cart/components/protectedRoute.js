import { Navigate } from "react-router-dom";
import { userAuthStore } from "../stores/authStore"

const ProtectedRoute=({children})=>
{
    const user = userAuthStore((state) => state.user);
    if(!user.userName)
    {
        return <Navigate to="/login" replace />;
    }

    return children
}
export default ProtectedRoute