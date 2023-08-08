import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer'

interface State {
    user: Maybe<IUser>;
}

interface Actions {
    signIn: (user: IUser) => void;
    signOut: () => void;
}

export const useUserStore = create(
    immer<State & Actions>((set) => ({
        user: null,

        signIn: (user) => {
            set(store => {
                store.user = user
            })
        },

        signOut: () => {
            set(store => {
                store.user = null
            })
        }
    }))
)