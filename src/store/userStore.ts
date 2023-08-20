import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface State {
    user: Maybe<UserDoc>;
    isLoading: boolean;
}


interface Actions {
    signIn: (user: UserDoc) => void;
    signOut: () => void;
    setLoading: (isLoading: boolean) => void;
}

export const useUserStore = create(
    immer<State & Actions>((set) => ({
        isLoading: false,
        user: null,

        setLoading: (isLoading) => {
            set(store => { store.isLoading = isLoading })
        },

        signIn: (user) => {
            set(store => {
                store.isLoading = false;
                store.user = user
            })
        },

        signOut: () => {
            set(store => {
                store.isLoading = false;
                store.user = null
            })
        }
    }))
)