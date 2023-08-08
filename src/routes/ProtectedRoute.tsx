import { useUserStore } from "@/store/userStore"
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const user = useUserStore(state => state.user);

    if (!user) {
        return <Navigate to={'/auth'} />
    } else {
        return <>{children}</>
    }
}

export default PrivateRoute