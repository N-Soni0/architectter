import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type CloseCallback = () => void;
type OpenCallback = () => void;

interface PopUp {
    id: ID
    close: CloseCallback
    open: OpenCallback
}

interface State {
    popUps: PopUp[]
}

interface Actions {
    push: (id: string, close: CloseCallback, open: OpenCallback) => void;
    remove: (id: string) => void;

    close: (id: string) => void;
    open: (id: string) => void;
    clear: () => void;
}

export const usePopUpStore = create(
    immer<State & Actions>((set, get) => ({
        popUps: [],
        
        clear: () => {
            get().popUps.forEach(popUp => popUp.close())
        },

        close: (id) => {
            const targetPopUp = get().popUps.find(popUp => popUp.id === id);
            
            targetPopUp?.close();
        },

        open: (id) => {
            const targetPopUp = get().popUps.find(popUp => popUp.id === id);
            
            targetPopUp?.open();
        },

        push: (id, closeCallback, openCallback) => {
            // Check if popup exists
            if (get().popUps.find(popUp => popUp.id === id)) return;
            
            set(store => {
                store.popUps.push({
                    id, 
                    close: closeCallback,
                    open: openCallback,
                })
            })
        },

        remove: (id) => {
            set(store => {
                store.popUps = store.popUps.filter(popUp => {
                    const isTarget = popUp.id === id;

                    if (isTarget) popUp.close();

                    return !isTarget;
                })
            })
        }
    }))
)