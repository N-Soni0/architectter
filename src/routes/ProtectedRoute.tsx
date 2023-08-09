import { useConvexAuth } from "convex/react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated } = useConvexAuth();

    if (!isAuthenticated) {
        return <Navigate to={'/auth'} />
    } else {
        return <>{children}</>
    }
}

export default PrivateRoute