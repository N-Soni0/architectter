import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type CloseCallback = () => void;
interface PopUp {
    id: ID,
    close: CloseCallback
}

interface State {
    popUps: PopUp[]
}

interface Actions {
    push: (id: string, close: CloseCallback) => void;
    clear: () => void;
    remove: (id: string) => void;
}

export const usePopUpStore = create(
    immer<State & Actions>((set, get) => ({
        popUps: [],
        
        clear: () => {
            set(store => {
                // Close all pop ups
                store.popUps.forEach(popUp => popUp.close());

                store.popUps = [];
            })
        },

        remove: (id) => {
            set(store => {
                const targetPopUp = store.popUps.find(popUp => popUp.id === id);
                
                if (targetPopUp) {
                    targetPopUp.close();
                    store.popUps = store.popUps.filter(popUp => popUp.id !== id);
                }
            })
        },

        push: (id, closeCallback) => {
            // Check if popUp doesnt exist
            if (get().popUps.find(popUp => popUp.id === id)) return;
            
            set(store => {
                store.popUps.push({
                    id, 
                    close: closeCallback
                })
            })
        }
    }))
)