import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useConvexAuth } from "convex/react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthButtons = () => {
    const { isAuthenticated,  } = useConvexAuth();
    const { user } = useAuth0();
    
	return <div>
        {isAuthenticated ? (
            <div className="flex gap-3 items-center">
              <p className="text-lg text-base-300 font-semibold">{user?.name}</p>  

              <LogoutButton />
            </div>
        ) : (
            <LoginButton />
        )}
    </div>;
};

export default AuthButtons;
