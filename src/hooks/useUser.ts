import { useUserStore } from "@/store/userStore";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { api } from "../../convex/_generated/api";
import { useConvex } from "convex/react";

export function useUser() {
    const user = useUserStore(state => state.user);
    const setIsLoading = useUserStore(state => state.setLoading);
    const { user: auth0User } = useAuth0();
    const convex = useConvex();
    const [userDoc, setUserDoc] = useState<Maybe<UserDoc>>(user);
    
    useEffect(() => {
        const fetchUserByEmail = async (email: string): Promise<Maybe<UserDoc>> => {
            return await convex.query(api.users.getUserByEmail, { email });
        }
    
        const createUser = async (email: string, username: string): Promise<Maybe<UserDoc>> => {
            return await convex.mutation(api.users.createUser, { email, username })
        }

        (async () => {
            if (userDoc) return;

            if (!auth0User?.email) return;

            setIsLoading(true);
            const fetchedUser = await fetchUserByEmail(auth0User.email)

            if (fetchedUser) {
                setUserDoc(fetchedUser)
            } else {
                const newUser = await createUser(auth0User.email, auth0User.nickname || 'null')
                if (!newUser) return;

                setUserDoc(newUser);
            }

            setIsLoading(false);
        })()
    }, [auth0User?.email, auth0User?.nickname, userDoc, convex]);

    return userDoc;
}