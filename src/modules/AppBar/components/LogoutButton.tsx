import { useUserStore } from '@/store/userStore';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
	const { logout } = useAuth0();  
	const signOut = useUserStore(state => state.signOut);

	return (
		<button
			className='btn'
			onClick={() =>
				logout({ logoutParams: { returnTo: window.location.origin } })
					.then(signOut)
			}
		>
			Log Out
		</button>
	);
};

export default LogoutButton;
