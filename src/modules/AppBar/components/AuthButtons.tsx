import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useUserStore } from "@/store/userStore";

const AuthButtons = () => {
    const user = useUserStore(state => state.user);
    const isLoading = useUserStore(state => state.isLoading);
    
    if (isLoading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
	return <div>
        {user ? (
            <div className="flex gap-3 items-center">
              <p className="text-lg text-base-300 font-semibold">{user?.username}</p>  

              <LogoutButton />
            </div>
        ) : (
            <LoginButton />
        )}
    </div>;
};

export default AuthButtons;
