import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Tool } from "../types/tools";


interface State {
    tool: Maybe<Tool>;
    disabled: boolean;
}

interface Actions {
    selectTool: (tool: Tool) => void;
    unselect: () => void;
    disable: () => void;
    reset: () => void;
}

export const useToolsStore = create(
    immer<State & Actions>((set, get) => ({
        tool: null,
        disabled: false,

        disable: () => {
            get().unselect();
            set(store => { store.disabled = true })
        },

        selectTool: (tool) => {
            if (!get().disabled) {
                set(store => { store.tool = tool })
            }
        },

        unselect: () => {
            set(store => { store.tool = null })
        },

        reset() {
            set(store => {
                store.tool = null;
                store.disabled = false;
            })
        }
    }))
)