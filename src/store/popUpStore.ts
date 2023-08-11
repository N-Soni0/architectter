import { generateId } from "@/utils/generateId";
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
    push: (close: CloseCallback) => void;
    clear: () => void;
    remove: (id: ID) => void;
}

export const usePopUpStore = create(
    immer<State & Actions>((set) => ({
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

        push: (closeCallback) => {
            const id = generateId();

            set(store => {
                store.popUps.push({
                    id, 
                    close: closeCallback
                })
            })
        }
    }))
)